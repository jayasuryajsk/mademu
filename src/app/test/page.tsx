export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Tailwind CSS Test</h1>
      <p className="text-white">If you see blue background and white text, Tailwind is working!</p>
      <button className="bg-white text-blue-500 px-4 py-2 rounded mt-4 hover:bg-gray-100">
        Test Button
      </button>
    </div>
  )
}