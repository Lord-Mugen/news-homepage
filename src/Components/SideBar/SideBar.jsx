import "./sideBar.css";

const Sidebar = () => {
  return (
    <section className="sideBar__container">
      <article className="sideBar">
        <div>
          <h2 className="sideBar__title">New</h2>
        </div>
        <div>
          <h3 className="sideBar__subTitle">Hydrogen VS Ekectric Cars</h3>
          <p className="sideBar__p">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div>
          <h3 className="sideBar__subTitle">The Downsides of AI Artistry</h3>
          <p className="sideBar__p">
            What are the possible adverse effects of on-demand AI image
            generation
          </p>
        </div>
        <div>
          <h3 className="sideBar__subTitle">Is VC Funding Drying Up</h3>
          <p className="sideBar__p">
            Private funding by VC firms is down 50% YOY, We take a look at what
            that means.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
