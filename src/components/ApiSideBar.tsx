export function ApiSidebar() {
  return (
    <div className="w-64 bg-[#2f2f2f] rounded-lg p-4">
      <div className="mb-4">
        <label
          htmlFor="api-key"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          API Key
        </label>
        <input
          id="api-key"
          className="w-full bg-[#1c1c1c] border-gray-700 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="llm"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          LLM
        </label>
        <input
          id="llm"
          className="w-full bg-[#1c1c1c] border-gray-700 text-white"
        />
      </div>
    </div>
  );
}
