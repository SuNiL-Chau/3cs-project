<?php

$curl = curl_init();

curl_setopt_array($curl, array(

  CURLOPT_URL => DOMAIN . BASEPATH . 'admin/api/leadership?_format=json&time=' . date("h:i:sa"),

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_ENCODING => '',

  CURLOPT_MAXREDIRS => 10,

  CURLOPT_TIMEOUT => 0,

  CURLOPT_FOLLOWLOCATION => true,

  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

  CURLOPT_CUSTOMREQUEST => 'GET',

));

$response = curl_exec($curl);

curl_close($curl);

$leadership_ = json_decode($response, true);

$leadership = $leadership_[0];



function clean1($string)
{

  $string = trim($string);

  $string = strtolower($string);

  $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

  return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.

}

?>

<!DOCTYPE html>

<html lang="en">

<head>

  <base href="<?= BASEPATH ?>" />

  <meta charset="UTF-8" />

  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <?php if (isset($leadership['field_lseo_export']['header_code'])) {
    echo html_entity_decode($leadership['field_lseo_export']['header_code']);
  } ?>

  <link rel="shortcut icon" href="assets/faivcon.ico" type="image/x-icon" />

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

  <!-- Link Swiper's CSS -->

  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" />

  <link rel="stylesheet" href="./dist/css/bootstrap.css" />

  <link rel="stylesheet" href="./dist/css/main.css" />

  <link rel="stylesheet" href="./dist/css/pages/leadership.css" />

  <link rel="preload" as="video" type="video/mp4" href="assets/videos/analytics-as-service/banner.mp4" />

  <link rel="stylesheet" href="./dist/css/megamenu.css">

</head>

<body class="leadership">

  <?php if (isset($leadership['field_lseo_export']['body_code'])) {
    echo html_entity_decode($leadership['field_lseo_export']['body_code']);
  } ?>

  <?php include 'includes/mega-menu.php'; ?>

  <section class="c-banner scaiBanner">

    <div class="container-fluid px-0">

      <div class="row no-gutters">

        <div class="col-md-6 align-self-center order-2 order-md-1">

          <div class="c-banner__left scaiBanner__left">

            <p class="c-banner__title text-primary" data-aos="fade-up" data-aos-delay="300"><?= $leadership['title'] ?></p>

            <h2 class="c-banner__subtitle" data-aos="fade-up" data-aos-delay="600"><?= $leadership['field_lshort_description'] ?></h2>

            <!--<a class="border-0 btn btn-dark btn-lg c-banner__cta" role="button" href="<?= $leadership['field_button_link'] ?>" data-aos-delay="900" data-aos="fade-up">

              <?= $leadership['field_button_text'] ?>

            </a>-->

          </div>

        </div>

        <div class="col-md-6 order-1 order-md-2" data-aos="fade-up">

          <img class="c-banner__image" src="<?= $leadership['field_lbanner_image'] ?>" />

        </div>

      </div>

    </div>

  </section>

  <section class="directors">

    <div class="row no-gutters">

      <div class="container">

        <h2 class="directors__title" data-aos="fade-up" data-aos-offset="300">Leaders</h2>

      </div>

    </div>

    <div class="row no-gutters">

      <div class="container">

        <div class="col-md-12">

          <ul class="directorsList">

            <?php

            foreach ($leadership['field_leaders_export'] as $leaders) {

            ?>

              <li class="directorsListItem -widthSet-medium">

                <div class="directorsImagesWrap">

                  <img src="<?= $leaders['limage'] ?>" class="directorsImages" alt="<?= $leaders['lname'] ?>" />

                </div>

                <div class="directorsContent">

                  <h3 class="directorsTitle"><?= $leaders['lname'] ?></h3>

                  <h5 class="directorsSubtitle"><?= $leaders['ldesignation'] ?></h5>

                  <p class="directorsDesc"><?= $leaders['lshort_description'] ?></p>

                </div>

              </li>

            <?php

            }

            ?>

          </ul>

        </div>

      </div>

    </div>

  </section>



  <section class="leaders">

    <div class="row no-gutters">

      <div class="container">

        <h2 class="leaders__title" data-aos="fade-up" data-aos-offset="300">Board of Directors</h2>

      </div>

    </div>

    <div class="row no-gutters">

      <div class="container">

        <div class="col-md-12">

          <!-- Silk -->

          <div class="leaderCarousel">

            <?php

            foreach ($leadership['field_directors_export'] as $directors) {

            ?>

              <div class="our-team">

                <img src="<?= $directors['dimage'] ?>" alt="team member" class="img-responsive" />

                <div class="team-content">

                  <h3 class="name"><?= $directors['name'] ?></h3>

                  <span class="post"><?= $directors['designation'] ?></span>

                  <p style="display: none"><?= $directors['ddescription'] ?></p>

                </div>

              </div>

            <?php

            }

            ?>

          </div>

        </div>

      </div>

    </div>

  </section>



  <section class="leaders">

    <div class="row no-gutters">

      <div class="container">

        <h2 class="leaders__title" data-aos="fade-up" data-aos-offset="300">Advisors</h2>

      </div>

    </div>

    <div class="row no-gutters">

      <div class="container">

        <div class="col-md-12">

          <!-- Silk -->

          <div class="leaderCarousel">

            <?php

            foreach ($leadership['field_directors_export'] as $directors) {

            ?>

              <div class="our-team">

                <img src="<?= $directors['dimage'] ?>" alt="team member" class="img-responsive" />

                <div class="team-content">

                  <h3 class="name"><?= $directors['name'] ?></h3>

                  <span class="post"><?= $directors['designation'] ?></span>

                  <p style="display: none"><?= $directors['ddescription'] ?></p>

                </div>

              </div>

            <?php

            }

            ?>

          </div>

        </div>

      </div>

    </div>

  </section>



  <?php include 'includes/get-in-touch.php'; ?>

  <?php include 'includes/subscribe.php'; ?>

  <?php include 'includes/footer.php'; ?>

  <!-- Jquery & Bootstrap Bundle js -->

  <script src="./dist/js/libs/jquery-3.5.1.slim.min.js"></script>

  <script src="./dist/js/libs/bootstrap.bundle.min.js"></script>

  <!-- aos -->

  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

  <script src="./dist/js/libs/pristine.js"></script>

  <!-- <script src="./dist/js/libs/particles.min.js"></script> -->

  <!-- Custom main js -->

  <script src="./dist/js/main.js"></script>

  <!-- <script src="./js/animations.js"></script> -->

  <script>
    AOS.init({

      // Global settings:

      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on

      initClassName: "aos-init", // class applied after initialization

      animatedClassName: "aos-animate", // class applied on animation

      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

      disableMutationObserver: false, // disables automatic mutations' detections (advanced)

      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)

      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:

      offset: 150, // offset (in px) from the original trigger point

      delay: 80, // values from 0 to 3000, with step 50ms

      duration: 600, // values from 0 to 3000, with step 50ms

      easing: "ease", // default easing for AOS animations

      once: true, // whether animation should happen only once - while scrolling down

      mirror: false, // whether elements should animate out while scrolling past them

      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation

    });
  </script>

  <!-- Initialize Swiper -->

  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

  <script>
    // debounce from underscore.js
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    // use x and y mousewheel event data to navigate flickity
    function directorList_handle_wheel_event(e, slick_instance, slick_is_animating) {
      // do not trigger a slide change if another is being animated
      if (!slick_is_animating) {
        // pick the larger of the two delta magnitudes (x or y) to determine nav direction
        var direction = Math.abs(e.deltaY) > 0;
        // var direction =
        //   Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

        // console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

        if (direction > 0) {
          // next slide
          slick_instance.slick("slickNext");
        } else {
          // prev slide
          slick_instance.slick("slickPrev");
        }
      }
    }

    // debounce the wheel event handling since trackpads can have a lot of inertia
    var directorList_handle_wheel_event_debounced = debounce(
      directorList_handle_wheel_event, 100, true
    );

    var directorList = $(".directorsList");
    directorList.slick({
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 300,
      draggable: true,
      autoplay: false,
      centerMode: true,
      autoplaySpeed: 6000,
      responsive: [{
          breakpoint: 1940,
          settings: {
            infinite: true,
            slidesToShow: 3,
            vertical: true,
            verticalSwiping: true,
            centerMode: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            vertical: false,
            verticalSwiping: false,
            infinite: true,
            centerMode: true,
            dots: true,
            swipe: true
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            vertical: false,
            verticalSwiping: false,
            infinite: true,
            dots: true,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 6000,
          },
        },
      ],
    });

    var directorList_is_animating = false;

    directorList.on("afterChange", function(index) {
      // console.log("Slide after change " + index);
      directorList_is_animating = false;
    });

    directorList.on("beforeChange", function(index) {
      // console.log("Slide before change " + index);
      directorList_is_animating = true;
    });

    directorList.on("wheel", function(e) {
      directorList_handle_wheel_event_debounced(e.originalEvent, directorList, directorList_is_animating);
    });

    // $(".directorsList").on("wheel", function(e) {
    //   e.preventDefault();
    //   if (e.originalEvent.deltaY > 0) {
    //     $(this).slick("slickNext");
    //   } else {
    //     $(this).slick("slickPrev");
    //   }
    // });



    // $('.directorsList').off('swipe').on('swipe', function (event, slick, direction) {

    //   $('.directorsList').toggleClass('swipping');

    // });



    $(".leaderCarousel").slick({

      dots: true,

      infinite: true,

      prevArrow: false,

      nextArrow: false,

      speed: 300,

      slidesToShow: 3,

      slidesToScroll: 1,

      autoplay: true,

      autoplaySpeed: 6000,

      responsive: [

        {

          breakpoint: 1024,

          settings: {

            slidesToShow: 3,

            slidesToScroll: 1,

            infinite: true,

            dots: true,

          },

        },

        {

          breakpoint: 600,

          settings: {

            slidesToShow: 2,

            slidesToScroll: 1,

          },

        },

        {

          breakpoint: 480,

          settings: {

            slidesToShow: 1,

            slidesToScroll: 1,

          },

        },

      ],

    });
  </script>

  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>

  <script src="./dist/js/script.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" crossorigin="anonymous" />

  <?php if (isset($leadership['field_lseo_export']['footer_code'])) {
    echo html_entity_decode($leadership['field_lseo_export']['footer_code']);
  } ?>



</body>



</html>