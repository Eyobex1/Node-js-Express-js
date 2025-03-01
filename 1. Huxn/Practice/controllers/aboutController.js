const aboutController = (req, res) => {
  const data = {
    name: "Huxn",
    userId: 20,
  };
  res.render("about", { data });
};

export { aboutController };
