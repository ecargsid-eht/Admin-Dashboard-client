import CreateBlog from "../../../components/CreateBlog";
import CreateEvent from "../../../components/CreateEvent";

function HomePage() {
  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="row rounded-4 px-3 gap-3">
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#F2D2BD" }}
          >
            <p className="display-2 fw-bold mb-0">10</p>
            <p className="small text-nowrap">
              Total <span className="d-xl-inline-block d-none">Active</span>{" "}
              Users
            </p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#E6E6FA" }}
          >
            <p className="display-2 fw-bold mb-0">5</p>
            <p className="small text-nowrap">Active Subscribers</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#FAF7F0" }}
          >
            <p className="display-2 fw-bold mb-0">2</p>
            <p className="small text-nowrap">Upcoming Events</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#D8D2C2" }}
          >
            <p className="display-2 fw-bold mb-0">27</p>
            <p className="small text-nowrap">Total Blog Posts</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#F8EDED", width: "fit-content" }}
          >
            <p className="display-2 fw-bold mb-0">3</p>
            <p className="small text-nowrap">Upcoming Workshops</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#CADABF", width: "fit-content" }}
          >
            <p className="display-2 fw-bold mb-0">12</p>
            <p className="small text-nowrap">Project Submissions</p>
          </div>
        </div>
        <CreateEvent />
      </div>
      <div className="col-12 col-lg-6 mt-3 mt-md-0">
        <CreateBlog />
      </div>
    </div>
  );
}

export default HomePage;
