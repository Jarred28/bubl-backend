// Step 3: Define our class that will create a new object!
class Link {
    constructor(link) {
      this.link = link;
      // 1,2,3,4
      // console.log(this.link.dataset.tab); 
      this.content = document.querySelector(`.content[data-tab='${this.link.dataset.tab}']`);
      // console.log(this.content); 
      // This is creating a new Content object using the DOM content object
      //console.log(this.content);
      this.content = new Content(this.content);
      //console.log(this.content);
     
      // this.link.addEventListener('click', this.linkClick.bind(this));
      this.link.addEventListener('click', () => this.linkClick());
    }
    // methods
    linkClick() {
      this.content.toggleContent();
    }
  }
  
  class Content {
    constructor(content) {
      this.contentTab = content;
    }
    // Methods
    toggleContent() {
      this.contentTab.classList.toggle('change');
    }
  }
  
  // Step 1: Get our DOM elements and store them in links
  const links = document.querySelectorAll('.link');
  
  // Step 2: Iterate over the NodeList and create a new object
  links.forEach(function(link){
    // we are returning our newly created objects here
    return new Link(link);
  });