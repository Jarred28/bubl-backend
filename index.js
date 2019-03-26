
class TabLink {
  
    
    constructor(link) {
      
      
      this.tabContent = document.querySelector(`.content[data-tab='${link.dataset.tab}']`);
      
      
      this.tabContent = new Content(this.tabContent);
      
     
      link.addEventListener('click', () => this.linkClicked());
      
    }
    
    
    linkClicked() {
      
      console.log(this);
      
      this.tabContent.toggleContent();
      
    }
    
  }
  
  
  const links = document.querySelectorAll('.link');
  
  
  links.forEach(link => new TabLink(link));
  
  