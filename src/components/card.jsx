export default function Cardholder() {
  return (
    <div className="flex flex-row justify-center mr-40 mt-36 pb-28">
      <div className="max-w-sm rounded rounded overflow-hidden shadow-lg mb-auto">
        <img className="w-full" src="src\assets\phone_app.jpg" alt="trading_pic" />
        <div className="px-6 py-6">
          <div className="font-semibold text-xl mb-2">
            The first trading choice
          </div>
          <p>The no. 1 platform to make out all of your trades</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Connect
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Match
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Sell
          </span>
        </div>
      </div>
    </div>
  );
}
