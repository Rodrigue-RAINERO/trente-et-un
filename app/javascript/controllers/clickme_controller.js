import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clickme"
export default class extends Controller {
  static targets = ["divbutton", "section", "imgmassage"]

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  hideDiv() {
    console.log("hideDiv")
    this.sectionTarget.classList.add("d-none")
    this.divbuttonTarget.classList.add("paddingTop")
    this.imgmassageTarget.classList.remove("d-none")
    this.imgmassageTarget.classList.add("opacity1")
  }
}
