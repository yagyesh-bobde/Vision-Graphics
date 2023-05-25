function openCvReady() {
    cv["onRuntimeInitialized"] = () => {
        console.log("Open Cv ready")


        // Read an image
        let imgMain = cv.imread('img-main')
        let imgGray = imgMain.clone();
        let imgBlur = imgMain.clone();
        let imgCanny = imgMain.clone();

        
        // converting image to grayscale
        // cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY, 0)
        // adding blur
        // let ksize = new cv.Size(49 , 49);
        // cv.GaussianBlur(imgMain, imgBlur, ksize, 0)

        cv.Canny(imgMain, imgCanny, 50, 100)

        cv.imshow("main-canvas", imgCanny);
        imgMain.delete(); // to free memory allocated
        imgGray.delete(); // to free memory allocated
        imgBlur.delete(); // to free memory allocated
        imgCanny.delete(); // to free memory allocated
    }
}