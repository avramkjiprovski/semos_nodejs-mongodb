const CONTENT = [
  {
    id: 1,
    element_type: "navLink",
    content: "Avram",
  },
  {
    id: 2,
    element_type: "navLink",
    content: "Blog",
  },
  {
    id: 3,
    element_type: "navLink",
    content: "Contact",
  },
  {
    id: 4,
    element_type: "navLink",
    content: "About",
  },
  {
    id: 5,
    element_type: "h1_pageTitle",
    content: "Avram Kjiprovski",
  },
];

const getAllContent = async () => {
  return CONTENT;
};

const addNewContent = async (content) => {
  SONGS.push({
    id: content.id,
    element_type: content.element_type,
    content: content.content,
  });
  console.log(`content ${content} added!`);
};

module.exports = {
  getAllContent,
  addNewContent,
};
