function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    } else {
      console.error(`No se encontró el elemento con el ID: ${id}`);
    }
  }
