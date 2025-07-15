const books = [
    {
      id: 1,
      title: "Lonesome Dove",
      author: "Larry McMurtry",
      cover: `${import.meta.env.BASE_URL}covers/lonesome-dove.jpg`, // ✅ dynamic base path
      status: "read",
      review: "One of my all-time favorites. Epic, raw, and deeply human.",
    },
    {
      id: 2,
      title: "East of Eden",
      author: "John Steinbeck",
      cover: "/covers/east-of-eden.jpg",
      status: "read",
      review: "A powerful story of good, evil, and family legacies.",
    },
    {
      id: 3,
      title: "For Whom the Bell Tolls",
      author: "Ernest Hemingway",
      cover: "/covers/bell-tolls.jpg",
      status: "to-read",
      review: "",
    },
  ];
  
  export default books;
  