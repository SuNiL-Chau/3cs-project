<?php
// -----------------------------------------------ITMS-------------------------------------------------- //
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => DOMAIN . BASEPATH . 'admin/api/careers?_format=json&time=' . date("h:i:sa"),
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
$careers_ = json_decode($response, true);
$careers = $careers_[0];

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
  <?php if (isset($careers['field_seo1_export']['header_code'])) {
    echo html_entity_decode($careers['field_seo1_export']['header_code']);
  } ?>
  <link rel="shortcut icon" href="assets/faivcon.ico" type="image/x-icon" />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
  <link rel="stylesheet" href="./dist/css/bootstrap.css" />
  <link rel="stylesheet" href="./dist/css/main.css" />
  <link rel="stylesheet" href="./dist/css/pages/currentOpenings.css" />
</head>

<body class="currentOpenings">
  <?php if (isset($careers['field_seo1_export']['body_code'])) {
    echo html_entity_decode($careers['field_seo1_export']['body_code']);
  } ?>
  <?php include 'includes/menu.php'; ?>
  <section class="c-banner currentOpenings__banner">
    <div class="container-fluid px-0">
      <div class="row no-gutters">
        <div class="col-md-7 align-self-center order-2 order-md-1" data-aos="fade-left" data-aos-delay="150">
          <div class="c-banner__left">
            <p class="c-banner__title text-white" data-aos="fade-left" data-aos-delay="400"><?= $careers['title'] ?></p>
            <h2 class="c-banner__para text-white" data-aos="fade-left" data-aos-delay="800">
              <?= html_entity_decode($careers['field_cashort_description']) ?>
            </h2>
          </div>
        </div>
        <div class="col-md-12 order-1 order-md-2" data-aos="fade-left">
          <img class="c-banner__image" src="<?= $careers['field_cabanner_image'] ?>" />
        </div>
      </div>
    </div>
  </section>

  <div class="currentOpenings__openings">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="currentOpenings__openingsTitle" data-aos="fade-left">Current Openings</h2>
          <p class="currentOpenings__openingsSubtitle" data-aos="fade-left" data-aos-delay="400">Work with our vision-driven innovative teams to build ground-breaking supply chain solutions.</p>
          <form class="currentOpenings__openingsForm" data-aos="fade-left" data-aos-delay="400">
            <!-- <label for="category" class="currentOpenings__formLabel">
              <select name="category" id="category" class="currentOpenings__formSelect">
                <option value="Analytics">Analytics</option>
                <option value="Legal">Legal</option>
                <option value="Marketing - Major">Marketing - Major</option>
                <option value="Presales & Solution">Presales &amp; Solutions</option>
                <option value="Operation Excellence">Operation Excellence</option>
                <option value="Control Tower">Control Tower</option>
                <option value="Technology">Technology</option>
                <option value="Engineering">Engineering</option>
                <option value="SCE">SCE</option>
                <option value="Marketing">Marketing</option>
                <option value="ESG">ESG</option>
              </select>
            </label>
            <label for="jobtitle" class="currentOpenings__formLabel">
              <input type="text" name="jobtitle" id="jobtitle" class="currentOpenings__formInput" placeholder="Job Title" />
            </label> -->
            <label for="location" class="currentOpenings__formLabel">
              <input type="text" name="location" id="location" class="currentOpenings__formInput" placeholder="Location" />
            </label>
            <button type="submit" class="currentOpenings__formSubmit">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 120 120" width="50" height="50">
                <path d="M42.6 13c-6.3 1.6-15.3 7-19.7 11.7-2.2 2.4-5.5 7.4-7.2 11.1-2.9 6.1-3.2 7.6-3.2 16.3 0 9 .2 9.9 3.7 17.1 4.5 9.1 10.3 14.7 19.6 19.1 6.1 2.9 7.6 3.2 16.3 3.2 9.4 0 10-.1 17.7-4.1l8-4.1 12.4 12.4c6.7 6.7 13 12.3 13.8 12.3 2 0 4-2 4-4 0-.8-5.6-7.1-12.3-13.8L83.3 77.8l4.1-8c4-7.8 4.1-8.3 4.1-17.7 0-9.2-.2-10.1-3.7-17.3C81 21.2 69 13.1 54.2 12.4c-4.2-.2-9.4.1-11.6.6zm22.9 10.1c6.3 3 12.4 9 15.5 15.4 3.4 7.2 3.4 19.8 0 27-3.1 6.4-9.1 12.4-15.5 15.5-7.2 3.4-19.8 3.4-27 0-26-12.6-23.8-49.5 3.5-59.4 6.3-2.3 17-1.6 23.5 1.5z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="currentOpenings__jobGrid">
            <?php
            foreach ($careers['field_careers_export'] as $career) {
            ?>
              <div class="currentOpenings__job" data-aos="fade-up">
                <div class="currentOpenings__jobPreview">
                  <div class="currentOpenings__jobPreviewTop">
                    <p class="currentOpenings__jobPre">Job Title</p>
                    <p class="currentOpenings__jobTitle"><?= $career['job_title'] ?></p>
                  </div>
                  <div class="currentOpenings__jobPreviewBottom">
                    <div class="currentOpenings__jobLocation">
                      <img src="assets/svgs/icons8-location-100-white.svg" alt="" class="currentOpenings__jobLocationIcon" />
                      <span class="currentOpenings__jobLocationTxt"><?= $career['location'] ?></span>
                    </div>
                    <div class="currentOpenings__jobExp">
                      <img src="assets/svgs/user-gear-white.svg" alt="" class="currentOpenings__jobExpIcon" />
                      <span class="currentOpenings__jobExpTxt"><?= $career['experience'] ?></span>
                    </div>
                  </div>
                </div>
                <div class="currentOpenings__jobDetails text-left">
                  <p class="currentOpenings__jobPre">Job Title</p>
                  <p class="currentOpenings__jobTitle"><?= $career['job_title'] ?></p>
                  <p class="currentOpenings__jobPre">Job Description</p>
                  <p class="currentOpenings__jobDesc"><?= $career['job_description'] ?></p>
                  <div class="currentOpenings__jobPreviewBottom -invert">
                    <div class="currentOpenings__jobLocation">
                      <img src="assets/svgs/icons8-location-100.svg" alt="" class="currentOpenings__jobLocationIcon" />
                      <span class="currentOpenings__jobLocationTxt"><?= $career['location'] ?></span>
                    </div>
                    <div class="currentOpenings__jobExp">
                      <img src="assets/svgs/user-gear.svg" alt="" class="currentOpenings__jobExpIcon" />
                      <span class="currentOpenings__jobExpTxt"><?= $career['experience'] ?></span>
                    </div>
                  </div>
                  <a href="javascript:;" class="currentOpenings__jobApply" onclick="javascript: jobdesc('<?= $career['job_title'] ?>');" data-toggle="modal" data-target="#currentOpening" data-title="<?= strtolower(str_replace(" ", "-", $career['job_title'])) ?>">Apply Now</a>
                </div>
              </div>
            <?php
            }
            ?>
          </div>
          <button <?php if (count($careers['field_careers_export']) <= 6) {
                    echo 'style="display: none;"';
                  } ?> href="javascript:;" class="btn btn-outline-dark btn-lg mt-5" data-aos="fade-up" data-aos-delay="200">Load More</button>
        </div>
      </div>
    </div>
  </div>

  <!-- for parallax effect in any c-fullbanner add background image to parent else use normal image element. SO below is how the parallax componenet will look like -->
  <div class="c-fullBanner -te mt-0" style="background-image: url('assets/images/current-Openings/banner2.webp');">
    <div class="c-fullBanner__imgContainer" data-aos="fade-in">
      <!-- <img src="assets/images/current-Openings/banner2.webp" alt="Banner image" /> -->
    </div>
    <div class="c-fullBanner__content text-center">
      <h1 class="c-fullBanner__title text-white" data-aos="fade-up" data-aos-delay="400">Get to know us</h1>
      <a href="<?= BASEPATH ?>about-us" class="btn btn-outline-light btn-lg mt-3" data-aos="fade-up" data-aos-delay="600">About us</a>
    </div>
  </div>

  <div class="c-fullBanner -te mt-0">
    <div class="c-fullBanner__imgContainer" data-aos="fade-in">
      <!-- <img src="assets/images/current-Openings/banner2.webp" alt="Banner image" /> -->
      <div class="bgParticle"></div>
    </div>
    <div class="c-fullBanner__content text-center">
      <h1 class="c-fullBanner__title" data-aos="fade-up" data-aos-delay="400">Don't See The Role <br />You Are Looking For?</h1>
      <a href="javascript:;" class="btn btn-outline-dark btn-lg mt-3" data-aos="fade-up" data-aos-delay="600" data-toggle="modal" data-target="#currentOpening">Apply Now</a>
    </div>
  </div>


  <?php include 'includes/get-in-touch.php'; ?>

  <?php include 'includes/subscribe.php'; ?>

  <?php include 'includes/footer.php'; ?>

  <!-- Modal -->
  <div class="modal fade currentOpeningModal" id="currentOpening" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0 pt-2 pb-2 pl-4 pr-4">
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body pl-3 pl-md-0 pb-5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 pl-0">
                <img src="assets/images/current-Openings/modal.png" class="img-fluid cOpen-banner" alt="Banner image" />
              </div>
              <div class="col-md-6 align-self-center">
                <form id="roleLooking" enctype="multipart/form-data">
                  <div class="row">
                    <div class="col-md-12 col-12">
                      <h3 class="mb-4 text-white">Don't see the role you are looking for ?</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <input type="text" class="form-control-2" placeholder="First name" id="firstnameinput" required />
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <input type="text" class="form-control-2" placeholder="Last name" id="lastnameinput" required />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <input type="number" maxlength="10" class="form-control-2" id="contact" placeholder="Contact" required />
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="form-group">
                        <input type="email" class="form-control-2" placeholder="Email" id="emailinput" required />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-12">
                      <div class="form-group">
                        <div class="input-group is-invalid">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" accept=".doc,.docx,application/msword,officedocument.wordprocessingml.document,.pdf" required />
                            <label class="custom-file-label" for="validatedInputGroupCustomFile">Attach CV</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <button class="btn btn-lg btn-outline-dark" type="submit">Submit form</button>
                  </div>
                  <div class="c-formResponse">
                    <p class="c-formResponse__title">Thank you for submitting. <br />Our team will get in touch <br />with you shortly.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Jquery & Bootstrap Bundle js -->
  <script src="./dist/js/libs/jquery-3.5.1.slim.min.js"></script>
  <script src="./dist/js/libs/bootstrap.bundle.min.js"></script>
  <!-- aos -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="./dist/js/libs/pristine.js"></script>
  <!-- <script src="./dist/js/libs/particles.min.js"></script> -->
  <!-- Custom main js -->
  <script src="./dist/js/main.js"></script>
  <script src="./dist/js/Openings.js"></script>
  <!-- <script src="./js/animations.js"></script> -->
  <input type="hidden" id="jobdesc" name="jobdesc" />
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

    function jobdesc(job) {
      document.getElementById('jobdesc').value = job;
    }
  </script>
  <?php if (isset($careers['field_seo1_export']['footer_code'])) {
    echo html_entity_decode($careers['field_seo1_export']['footer_code']);
  } ?>
</body>

</html>