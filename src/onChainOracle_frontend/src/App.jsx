import { onChainOracle_backend } from "declarations/onChainOracle_backend";
import { useState } from "react";

function App() {
	const [greeting, setGreeting] = useState("");

	function handleSubmit2(event) {
		event.preventDefault();
		onChainOracle_backend.getStoredData().then((greeting) => {
			setGreeting(greeting);
		});
		return false;
	}

	return (
		<main className="min-h-screen bg-gray-50 p-8">
			<div className="max-w-2xl mx-auto">
				{/* Logo Section */}
				<div className="flex justify-center mb-8">
					<img src="/logo2.svg" alt="DFINITY logo" className="h-16 w-auto" />
				</div>

				{/* Form Section */}
				<form
					onSubmit={handleSubmit2}
					className="bg-white p-6 rounded-lg shadow-md mb-8"
				>
					<div className="flex flex-col gap-4">
						<label htmlFor="name" className="text-lg font-medium text-gray-700">
							Get stored data
						</label>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
						>
							Fetch Data
						</button>
					</div>
				</form>

				{/* Data Display Section */}
				{greeting && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">
							Historical Data
						</h2>
						<div className="space-y-2">
							{greeting.map((item, index) => (
								<div
									key={index}
									className="p-3 bg-gray-50 rounded-md text-gray-700"
								>
									{item}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</main>
	);
}

export default App;