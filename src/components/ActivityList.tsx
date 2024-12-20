import { Badge } from "./ui/Badge";

const activities = [
  {
    id: 1,
    user: "KaveeHeaven",
    action: "sent $CROWD to 10 recipients",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...",
    type: "AIRDROP",
    time: "XX Hours Ago",
  },
  {
    id: 2,
    user: "KaveeHeaven",
    action: "sent $CROWD to 10 recipients",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...",
    type: "AIRDROP",
    time: "XX Hours Ago",
  },
  {
    id: 3,
    user: "KaveeHeaven",
    action: "sent $CROWD to 10 recipients",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...",
    type: "AIRDROP",
    time: "XX Hours Ago",
  },
];

export function ActivityList() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-[#2f2f2f] rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
            <div>
              <div className="flex items-center">
                <span className="font-semibold mr-1">{activity.user}</span>
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-400">{activity.action}</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            {activity.description}
            <span className="text-green-500 ml-1">MORE</span>
          </p>
          <div className="flex justify-between items-center">
            <Badge
              variant="outline"
              className="bg-green-500/10 text-orange-500 border-orange-500"
            >
              {activity.type}
            </Badge>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
