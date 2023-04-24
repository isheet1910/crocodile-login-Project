import image from "./image.jpg"
function PageFooter(props) {
return(<div id="footerdiv">
      <footer>
        <img id = "footimage" src={image} />
        <p>Crocodile Solutions, developer of Wings® Legal Case & Practice Management software in a cloud, started with an idea to make the day-to-day life of attorneys easier. Over the years, it’s evolved into a software development company that serves Social Security Disability, Veterans Law, Workers' Compensation, and Personal Injury practices.
        <br /><br /><br /><br />  Crocodile Solutions  |  100 Sycamore Street  |  Middleburg, VA 20117  |  336 742-0395  |  sales@crocodilesolutions.com
        </p>
      </footer>
      </div>);
}
export default PageFooter;