function openCvReady() {
    cv["onRuntimeInitialized"] = () => {
        console.log("Open Cv ready")


        // Read an image
        let imgMain = cv.imread('img-main')
        let inputFile = document.getElementById("input-file");
        cv.imshow("main-canvas", imgMain);
        imgMain.delete(); 
        
        

        document.getElementById("btn-rgb").onclick = () => {
            // Read an image
            let imgMain = cv.imread('img-main')
            cv.imshow("main-canvas", imgMain);
            imgMain.delete(); // to free memory allocated
        }

        document.getElementById("btn-gray").onclick = () => {
            // Read an image
            let imgMain = cv.imread('img-main')
            let imgGray = imgMain.clone();

            // converting image to grayscale
            cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY, 0)

            cv.imshow("main-canvas", imgGray);
            imgMain.delete(); // to free memory allocated
            imgGray.delete(); // to free memory allocated
        }

        document.getElementById("btn-blur").onclick = () => {
            // Read an image
            let imgMain = cv.imread('img-main')
            let imgBlur = imgMain.clone();

            // adding blur
            let ksize = new cv.Size(49 , 49);
            cv.GaussianBlur(imgMain, imgBlur, ksize, 0)

            cv.imshow("main-canvas", imgBlur);
            imgMain.delete(); // to free memory allocated
            imgBlur.delete(); // to free memory allocated
        }

        document.getElementById("btn-canny").onclick = () => {
            // Read an image
            let imgMain = cv.imread('img-main')
            let imgCanny = imgMain.clone();

            // adding blur
            cv.Canny(imgMain, imgCanny, 50, 100)

            cv.imshow("main-canvas", imgCanny);
            imgMain.delete(); // to free memory allocated
            imgCanny.delete(); // to free memory allocated
        }
        // inputFile.onchange = (e) => {
        //     console.log(e.target.files)
        //     document.getElementById('img-main').src = URL.createObjectURL(e.target.files[0]);
        //     changeImage(URL.createObjectURL(e.target.files[0]))
        //     document.getElementById("file-upload").classList.remove("showupload");

        //     document.getElementById("btn-rgb").click()
        // }
    }
}

// let canvas = document.getElementById("main-canvas");

// function changeImage(source) {
//     document.getElementById('img-main').remove();
//     let img = document.createElement('img');
//     img.id = 'img-main';
//     img.src = source;
//     canvas.appendChild(img);
// }

// function setActiveButton(element) {
//     console.log(element)
// } 

// function uploadToggle() {
//     changeImage('')
//     document.getElementById("file-upload").classList.remove("showupload");
//     document.getElementById("file-upload").classList.add("showupload");
// }