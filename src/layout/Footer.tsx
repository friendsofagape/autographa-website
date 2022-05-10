export default function Footer() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-8 xl:py-20 text-white">
        <div className="mx-4 grid grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="heading">Autographa</h3>
            <h5>&copy; Bridge Connectivity Solutions Pvt. Ltd.</h5>
          </div>
          <ul className="xl:flex gap-5">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Success Stories</a>
            </li>
            <li>
              <a href="#">Try It</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
