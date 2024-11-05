import SearchForm from "@/components/SearchForm";

import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
	const query = (await searchParams).query;
	const posts = await client.fetch(STARTUPS_QUERY)

	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch Your Startup, <br /> Connect With Entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
				</p>
				<SearchForm query={query} />
			</section>
			<section className="section_container">
				<p className="text-30-semibold">
					{ query ? `Search results for "${query}"` : "All Startups" }
				</p>
				<ul className="card_grid mt-7">
					{posts?.length > 0 ? (
						posts.map((post) => (
							<StartupCard key={post?._id} post={post as StartupCardType} />
						))
					) : (
						<p className="no-results">No results found</p>
					)}
				</ul>
			</section>
		</>
	)
}
