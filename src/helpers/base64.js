export const toDataURL = (element) => {
    return new Promise((resolve) => {
      const reader = new FileReader(); //{}
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  };