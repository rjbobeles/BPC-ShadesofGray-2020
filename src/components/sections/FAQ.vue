<template>
  <div class="faq bg-white">
    <kinesis-container class="w-full">
      <div class="container mx-auto flex flex-col items-center py-8">
        <div class="w-7/12 flex">
          <hr />
          <img src="../../assets/images/decor.png" class="decor mx-8" />
          <hr />
        </div>
        <h2 class="text-6xl georgia font-bold text-smoke my-3 text-center">
          Frequently Asked Questions
        </h2>
        <div class="w-7/12 flex mb-12">
          <hr />
          <img src="../../assets/images/decor.png" class="decor mx-8 rotate-180" />
          <hr />
        </div>
        <div
          class="faq-group w-full justify-end xl:justify-start flex flex-col md:flex-row items-stretch pl-2 pr-4"
        >
          <div
            class="order-2 md:order-1 w-full md:w-3/5 lg:w-1/2 md:pr-8 xl:pr-12 static md:absolute xl:static left-0 xl:left-auto"
          >
            <kinesis-element :strength="20">
              <div class="faq-group__img" id="faq-group__img-1"></div>
            </kinesis-element>
          </div>
          <div
            class="faq-group__text order-1 md:order-2 w-full md:w-3/5 lg:w-7/12 xl:w-1/2 md:pl-5 xl:pl-12 flex flex-col justify-between mb-5 md:mb-0 md:mt-48 xl:mt-0 relative z-10"
            ref="faqGroup1"
            data-lax-preset="eager-150"
          >
            <FaqItem
              number="1"
              question="Where should I submit my entry?"
              answer="Submit your entry by filling up the form at the bottom of this website (sogepilogue.thebenildean.org) and make sure to answer all the questions."
            />
            <FaqItem
              number="2"
              question="Are there certain technicalities or rules I need to follow?"
              answer="For submissions, place your pieces in <b>Google Docs</b> using your Benilde mail. Make sure to adjust its sharing settings to “Anyone in this group with this link can view.” The word limit is up to 800 words."
            />
            <FaqItem
              number="3"
              question="What kind of entries can I submit?"
              answer="
            Any form of <b>creative writing</b>, such as poetry, short stories, scripts, and the like, that fits 
            the theme. Entries with themes and stories that ended abruptly and concluded but could have been more, 
            as well as open endings that are still unfinished and ongoing are welcome.
            <br /><br /> 
            Entries published before, either printed or digitally, will not be accepted.                
            "
            />
          </div>
        </div>
        <div
          class="faq-group w-full items-center flex flex-col md:flex-row items-stretch pl-4 pr-2"
        >
          <div
            class="faq-group__text w-full md:w-3/5 xl:w-1/2 md:pr-5 xl:pr-12 flex flex-col justify-between md:mt-32 xl:mt-0 relatize z-10 mb-5 md:mb-0"
            ref="faqGroup2"
            data-lax-preset="eager-150"
          >
            <FaqItem
              number="4"
              question="Until when can I submit entries?"
              answer="You may submit entries from <b>October 14, 2020 to November 10, 2020.</b>"
            />
            <FaqItem
              number="5"
              question="When will Shades of Gray be published?"
              answer="Stay tuned for further announcements. Follow our social media accounts to get updates: Facebook, Twitter, and Instagram (@thebenildean)."
            />
            <FaqItem
              number="6"
              question="How will I be notified if my work was or wasn’t chosen for Shades of Gray?"
              answer="
            The only way to find out is to wait for the online launch of the folio of Shades of Gray: Epilogue. For updates, follow our social media accounts at Facebook, Twitter, and Instagram (@thebenildean).           
            "
            />
          </div>
          <div
            class="w-full md:w-3/5 xl:w-1/2 md:pl-8 xl:pl-12 static md:absolute xl:static right-0 xl:right-auto"
          >
            <kinesis-element :strength="-20">
              <div class="faq-group__img" id="faq-group__img-2"></div>
            </kinesis-element>
          </div>
        </div>
        <div
          class="faq-group w-full justify-end xl:justify-start flex flex-col md:flex-row items-stretch pl-2 pr-4"
        >
          <div
            class="order-2 md:order-1 w-full md:w-3/5 lg:w-1/2 md:pr-8 xl:pr-12 static md:absolute xl:static left-0 xl:left-auto"
          >
            <kinesis-element :strength="20">
              <div class="faq-group__img" id="faq-group__img-3"></div>
            </kinesis-element>
          </div>
          <div
            class="faq-group__text order-1 md:order-2 w-full md:w-3/5 lg:w-7/12 xl:w-1/2 md:pl-5 xl:pl-12 flex flex-col justify-between mb-5 md:mb-0 md:mt-48 xl:mt-0 relative z-10"
            ref="faqGroup3"
            data-lax-preset="eager-150"
          >
            <FaqItem
              number="7"
              question="How many entries am I allowed to submit?"
              answer="You can submit <b>as many as you want</b>. Make sure to submit them individually in the form below with their corresponding title."
            />
            <FaqItem
              number="8"
              question="Who is eligible to submit?"
              answer="Shades of Gray will only accept entries from currently enrolled, bonafide students of De La Salle-College of Saint Benilde. "
            />
            <FaqItem
              number="9"
              question="What is your criteria in the selection process?"
              answer="
           The only criterion is how your work fits the theme of Shades of Gray: Epilogue. The selection process depends on the Literary Editor, Associate Editor for Print/Acting Editor in Chief, and the Associate Editor for Digital Media of the Benildean Press Corps.                
            "
            />
          </div>
        </div>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import FaqItem from '../FaqItem.vue'

export default {
  name: 'FAQ',
  components: {
    FaqItem,
  },
}
</script>

<style scoped lang="scss">
.faq {
  hr {
    border-top: 1px solid rgba(185, 185, 185, 0.733);
    width: 50%;
    margin-top: 15px;
  }
  .decor {
    width: 120px;
  }
  .rotate-180 {
    transform: rotate(180deg);
  }
  .faq-group {
    padding-top: 6rem;
    padding-bottom: 6rem;
    position: relative;
    .faq-group__img {
      width: 100%;
      background-position: center;
      background-size: cover;
    }
    #faq-group__img-1 {
      background-image: url('../../assets/images/faq-1.png');
      padding-bottom: 180%;
    }
    #faq-group__img-2 {
      background-image: url('../../assets/images/faq-2.png');
      padding-bottom: 150%;
    }
    #faq-group__img-3 {
      background-image: url('../../assets/images/faq-3.png');
      padding-bottom: 150%;
    }
  }
}

@media (max-width: 1279px) {
  .faq {
    .faq-group {
      .faq-group__text {
        min-height: 860px;
        background-color: white;
        padding: 20px;
      }
    }
  }
}

@media (max-width: 1023px) {
  .faq {
    .faq-group {
      #faq-group__img-1 {
        padding-bottom: 140%;
      }
    }
  }
}

@media (max-width: 767px) {
  .faq {
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    .faq-group {
      padding-top: 3rem;
      padding-bottom: 3rem;
      .text {
        min-height: initial;
      }
    }
  }
}

@media (max-width: 639px) {
  .faq {
    h2 {
      font-size: 10vw;
    }
  }
}
</style>
