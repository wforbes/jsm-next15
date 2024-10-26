"use client";

export default function GlobalError({error}: {error: Error & { digest?: string }}) {
	console.log(error);
	return (
		<html>
			<body>
				<h2>GLOBAL ERROR</h2>
			</body>
		</html>
	)
}