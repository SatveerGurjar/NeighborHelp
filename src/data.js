export const currentUser = {
  id: "u1",
  name: "Alex Johnson",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  location: {
    city: "San Francisco",
    area: "Mission District",
    locality: "Valencia St",
  },
  reputation: 450,
  badges: ["Helpful Hero", "Verified Neighbor"],
  role: "Requester", // Can swap easily
};

export const dummyUsers = [
  {
    id: "u2",
    name: "Sarah Miller",
    reputation: 320,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    badges: ["Verified Neighbor"],
  },
  {
    id: "u3",
    name: "Michael Chen",
    reputation: 850,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    badges: ["Community Pillar", "Verified Neighbor"],
  },
  {
    id: "u4",
    name: "Emily Davis",
    reputation: 120,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
    badges: [],
  },
  {
    id: "admin1",
    name: "Admin Jane",
    reputation: 9999,
    avatar: "https://i.pravatar.cc/150?u=admin",
    role: "Admin",
  },
];

export const dummyRequests = [
  {
    id: "r1",
    title: "Need help fixing a leaky faucet",
    description:
      "My kitchen sink is leaking and I lack the tools to fix it. Any handy neighbors around?",
    category: "Home Repair",
    status: "Open",
    requesterId: "u2",
    distance: "1.2 km",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    isEmergency: false,
    helperId: null,
  },
  {
    id: "r2",
    title: "Math tutoring for 5th grader",
    description:
      "Looking for someone to help my son with fractions for an hour this evening.",
    category: "Tutoring",
    status: "Accepted",
    requesterId: "u3",
    distance: "0.5 km",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    isEmergency: false,
    helperId: "u1",
  },
  {
    id: "r3",
    title: "Locked out of my apartment!",
    description:
      "Lost my keys and waiting for a locksmith. Could use a warm place to sit for 30 mins.",
    category: "Emergency",
    status: "Open",
    requesterId: "u4",
    distance: "0.1 km",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    isEmergency: true,
    helperId: null,
  },
  {
    id: "r4",
    title: "Borrow a power drill",
    description:
      "Just need to hang two picture frames. Will return it in an hour.",
    category: "Borrowing",
    status: "Completed",
    requesterId: "u1",
    distance: "3.0 km",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    isEmergency: false,
    helperId: "u2",
    rating: 5,
  },
];

export const dummyNotifications = [
  {
    id: "n1",
    type: "offer",
    message: "Sarah offered to help with your leaky faucet.",
    read: false,
    time: "2 mins ago",
  },
  {
    id: "n2",
    type: "message",
    message: "Michael sent you a message.",
    read: true,
    time: "1 hour ago",
  },
  {
    id: "n3",
    type: "system",
    message: 'You earned the "Helpful Hero" badge!',
    read: true,
    time: "2 days ago",
  },
];

export const dummyChats = {
  r2: [
    {
      id: "m1",
      senderId: "u3",
      text: "Hi! Thanks for offering to help with math.",
      timestamp: "14:30",
    },
    {
      id: "m2",
      senderId: "u1",
      text: "No problem! What time works best for you?",
      timestamp: "14:32",
    },
    {
      id: "m3",
      senderId: "u3",
      text: "Does 6 PM sound good?",
      timestamp: "14:35",
    },
  ],
};
