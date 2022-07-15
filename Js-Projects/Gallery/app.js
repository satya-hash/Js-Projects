const filterItem = document.querySelector('.buttons');
const filterImage = document.querySelectorAll('.image');

window.onload = () => {
    filterItem.addEventListener('click' , (selectedItem) => {

        if (selectedItem.target.classList.contains("all")) {
            // console.log(true);
            filterItem.querySelector('.active').classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            // console.log(filterName);
            filterImage.forEach((image)=>{

                let filterImages = image.getAttribute("data-name");
                // console.log(filterName);
                if ((filterImages == filterName) || filterName == "all") {
                    
                    image.classList.add('show');
                    image.classList.remove('hide');
                }else{
                    
                    image.classList.add('hide');
                    image.classList.remove('show');
                }
            });
        }
    });
    for (let index = 0; index < filterImage.length; index++) {
        filterImage[index].setAttribute('onclick' , 'preview(this)');
        
    }

};



const shadow = document.querySelector('.shadow');
const previewBox = document.querySelector('.preview-box');
previewImage = previewBox.querySelector('img')
const icon = document.querySelector('.icon');
const category = previewBox.querySelector('.title p');




function preview(element){

    let selectedPrevimg = element.querySelector('img');
    console.log(selectedPrevimg);
    previewImage.src = selectedPrevimg.src;

    let selectedCategory = element.getAttribute('data-name');
    // console.log(selectedCategory);
    category.textContent = selectedCategory;
    previewBox.classList.add('show');
    shadow.classList.add('show');
    icon.addEventListener('click' , () => {
        previewBox.classList.remove('show');
        shadow.classList.remove('show');
    });
}