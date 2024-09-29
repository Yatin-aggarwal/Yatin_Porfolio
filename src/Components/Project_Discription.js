const Project_Discription= {
   Pixel_Prompt:{
       title:"Pixel Prompt",
       content:"Pixel Prompt is a Generative AI project where anime character images are generated based on user-provided prompts. It follows a DCGAN (Deep Convolutional Generative Adversarial Network) approach for image generation. For prompt generation, LSTM (Long Short-Term Memory) is used to encode the prompts, which are then concatenated with random noise and fed into the generator. The discriminator receives both the generator's output and the user’s prompt encoding to distinguish between real and fake images. The project uses the Hugging Face dataset \"alfredplpl/anime-with-caption-cc0,\" which is approximately 21 GB in size and contains 15,000 images with corresponding prompts for supervised learning. Additionally, Pixel Prompt utilizes the \"openai-community/gpt2\" tokenizer from Hugging Face for handling textual inputs. ",
       github:'https://github.com/Yatin-aggarwal/Pixel_Prompt',


   },
    Sky_Watch:{
        title:'Sky Watch',
        content:'Sky Watch is a dynamic single-page React web app designed to provide real-time global weather forecasts. With its intuitive interface, users can easily search and select any city worldwide to access comprehensive weather details. The app provides critical information, including wind speed, wind direction, humidity levels, visibility, and atmospheric pressure, all presented in a clear, interactive format. Additionally, Sky Watch supports both 7-day and hourly weather forecasts, offering users a detailed outlook on current and upcoming weather conditions. Whether planning a trip or staying updated on local conditions, Sky Watch caters to a wide range of users. Its seamless, responsive design ensures that weather enthusiasts and casual users alike can enjoy a smooth, accurate, and informative experience.',
        github:'https://github.com/Yatin-aggarwal/Sky-Watch',


    },
     Color_World:{
        title:'Color World',
        content:'Color World is a project that leverages neural networks to generate color images from grayscale inputs. It operates on the concept of a variational autoencoder (VAE) to colorize images. The model is trained on the large CIFAR-10 dataset, which consists of 60,000 32x32 color images across 10 classes. By learning meaningful representations of the grayscale input, the VAE-based model reconstructs the image in color, adding realistic and context-aware hues to the grayscale image during the decoding process. ',
        github:'https://github.com/Yatin-aggarwal/Color_World',


    },
    Pixel_Prankster :{
        title:'Pixel Prankster',
        content:'This React website leverages Hugging Face\'s Stable Diffusion model API to generate images based on user input. The application features a sleek and modern frontend, developed with Tailwind CSS, ensuring a responsive and visually appealing design. Users can easily input their requests, and the website dynamically generates high-quality images that reflect their specifications. The combination of React\'s interactive capabilities and Tailwind CSS\'s utility-first approach creates an engaging user experience, making image generation accessible and enjoyable for all users.\n',
        github:'https://github.com/Yatin-aggarwal/Pixel-Prankster/tree/main/Pixel%20Prankster',



    },

    Waifu_gan : {
        title:'Waifu gan',
        content:'In this project Deep Convolutional Generative Network (Dcgan) is used to create anime waifu faces from random noises. Architecture of network is designed according to research paper published by "Alec Radford,  Luke Metz, Soumith Chintala"  ',
        github:'https://github.com/Yatin-aggarwal/Waifu-Face-Gan',

    },
    Sakura_trails : {
        title:'Sakura trails',
        content:'The Sakura Trails website is an online platform offering a range of price plans for trips to Japan. It is built with Node.js and Express for the backend, ensuring efficient server-side operations. The frontend is crafted using CSS and Bootstrap, delivering a clean and responsive user interface. MongoDB is used for data storage, providing scalable and flexible database management. The platform prioritizes user safety, featuring robust authentication and authorization systems to protect user data and ensure secure transactions.',
        github:'https://github.com/Yatin-aggarwal/Sakura-Trails',

    },


    WGAN_GP:{
        title:'WGAN GP',
        content:'In this project, a Wasserstein GAN with Gradient Penalty (WGAN-GP) is employed to generate anime waifu faces from random noise inputs. The network architecture is based on the research paper by Ishaan Gulrajani, Faruk Ahmed, Martin Arjovsky, Vincent Dumoulin, and Aaron Courville, which focuses on improving GAN stability using the Wasserstein distance with a gradient penalty. This approach ensures more stable training and generates high-quality, realistic anime faces by learning the underlying data distribution from the noise input.',
        demo:'https://1drv.ms/i/s!Ar7dOmZ1loYAhgZwt7z-q3q3aH6L?e=1738iA',
        github:'https://github.com/Yatin-aggarwal/WGAN_GP',

    },
    Style_transfer:{
        title:'Style Transfer',
        content:'"This project uses neural style transfer to merge the style of a \'style image\' with the content of a \'source image\', generating a stunning \'target image\' that combines the best of both."',
        demo:'https://github.com/Yatin-aggarwal/Neural_Style_Transfer_Learning/blob/master/Result.jpg',
        github:'https://github.com/Yatin-aggarwal/Neural_Style_Transfer_Learning',

    },









}


export default Project_Discription;