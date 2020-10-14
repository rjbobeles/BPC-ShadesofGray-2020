<template>
  <div>
    <form method="post" @submit.prevent="checkForm">
      <div>
        <input
          type="text"
          name="name"
          id="name"
          v-model.trim="userData.name"
          placeholder="LAST NAME, FIRST NAME "
          class="w-full"
          @blur="$v.userData.name.$touch()"
        />
        <span v-show="$v.userData.name.$error" v-if="!submitted" class="text-xs error self-start">
          Name must follow the format: Last Name, First Name
        </span>
      </div>
      <div>
        <multiselect
          v-if="courses"
          style="overflow: auto"
          v-model.trim="userData.course"
          deselect-label="Can't remove this value"
          track-by="id"
          :custom-label="courseLabel"
          placeholder="COURSE"
          :options="courses"
          :searchable="false"
          :allow-empty="false"
          :max-height="100"
          class="mt-4"
          @close="$v.userData.course.$touch()"
        >
          <template slot="singleLabel" slot-scope="{ option }">
            [{{ option.code }}] {{ option.course }}
          </template>
        </multiselect>
        <span v-show="$v.userData.course.$error" v-if="!submitted" class="text-xs error self-start">
          Course is required
        </span>
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="BENILDE EMAIL"
          class="w-full mt-4"
          v-model.trim="userData.email"
          @blur="$v.userData.email.$touch()"
        />
        <span v-show="$v.userData.email.$error" v-if="!submitted" class="text-xs error self-start">
          Email must be a valid benilde email
        </span>
      </div>
      <div>
        <input
          type="text"
          name="phoneNo"
          id="phoneNo"
          v-model.trim="userData.phoneNo"
          placeholder="PHONE NUMBER"
          class="w-full mt-4"
          @blur="$v.userData.phoneNo.$touch()"
        />
        <span
          v-show="$v.userData.phoneNo.$error"
          v-if="!submitted"
          class="text-xs error self-start"
        >
          Phone number must be a valid
        </span>
      </div>
      <div>
        <div>
          <input
            type="text"
            name="idNumber"
            id="idNumber"
            v-model.trim="userData.idNumber"
            placeholder="ID NUMBER (Ex. 11012345)"
            class="w-full mt-4"
            @blur="$v.userData.idNumber.$touch()"
          />
        </div>
        <span
          v-show="$v.userData.idNumber.$error"
          v-if="!submitted"
          class="text-xs error self-start"
        >
          ID number must be a valid Benilde ID number
        </span>
      </div>
      <div>
        <div>
          <input
            type="text"
            name="penName"
            id="penName"
            v-model.trim="userData.penName"
            placeholder="PEN NAME"
            class="w-full mt-4"
            @blur="$v.userData.penName.$touch()"
          />
        </div>
        <span
          v-show="$v.userData.penName.$error"
          v-if="!submitted"
          class="text-xs error self-start"
        >
          Pen Name must be 1-30 characters
        </span>
      </div>
      <div>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            v-model.trim="userData.title"
            placeholder="TITLE"
            class="w-full mt-4"
            @blur="$v.userData.title.$touch()"
          />
        </div>
        <span v-show="$v.userData.title.$error" v-if="!submitted" class="text-xs error self-start">
          Title must be 1-100 characters
        </span>
      </div>
      <div>
        <input
          name="drive"
          id="drive"
          v-model.trim="userData.drive"
          placeholder="GOOGLE DRIVE LINK"
          class="w-full mt-4"
          @blur="$v.userData.drive.$touch()"
        />
        <span v-show="$v.userData.drive.$error" v-if="!submitted" class="text-xs error self-start">
          Google Drive link must be a valid and has sharing enabled.
        </span>
      </div>
      <div>
        <p>T & C</p>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import multiselect from 'vue-multiselect'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  components: {
    multiselect,
  },
  props: {
    courses: {
      default: null,
      type: Array,
    },
  },
  data() {
    return {
      hasError: false,
      submitting: false,
      submitted: false,
      userData: {
        name: null,
        idNumber: null,
        course: null,
        email: null,
        phoneNo: null,
        penName: null,
        title: null,
        drive: null,
      },
    }
  },
  methods: {
    courseLabel({ code, course }) {
      return `[${code}] ${course}`
    },
    getChoiceID(choice) {
      if (choice) {
        return choice.id
      }
      return 0
    },
    checkForm() {
      this.$v.$touch()
      if (this.$v.$error || this.submitting) return
      this.submitForm()
    },
    submitForm() {
      const data = {
        name: this.userData.name,
        idNumber: this.userData.idNumber,
        course: this.userData.course.id,
        email: this.userData.email,
        phoneNo: this.userData.phoneNo,
        penName: this.userData.penName,
        title: this.userData.title,
        drive: this.userData.drive,
      }
      this.submitting = true
      this.hasError = false

      axios
        .post(`${process.env.VUE_APP_API_URL}/submit`, {
          type: process.env.VUE_APP_API_TYPE,
          theme: process.env.VUE_APP_API_THEME,
          data,
        })
        .then(() => {
          this.submitting = false
          this.hasError = true
          this.submitted = false
          this.$router.push({ name: 'Thanks' })
        })
        .catch(() => {
          this.submitting = false
          this.hasError = true
          this.submitted = false
          this.$router.push({ name: 'Home' })
        })
    },
  },
  watch: {
    submitting() {
      this.$emit('submitting', this.submitting)
    },
  },
  validations: {
    userData: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(60),
        isFullName(name) {
          return /^([A-Z][a-z]*,((\s)[A-Z][a-z]*)+)$/.test(name)
        },
      },
      idNumber: {
        required,
        isIDNumber(idNumber) {
          return /^(1)[0-5][0-9]([0-9]{5}\b)$/.test(idNumber)
        },
      },
      course: {
        required,
      },
      email: {
        required,
        isBenildeMail(email) {
          return /^[a-z0-9](\.?[a-z0-9]){5,}@benilde.edu.ph$/.test(email)
        },
      },
      phoneNo: {
        required,
        isPhoneNo(phoneNo) {
          return /((^(\+)(\d){12}$)|(^\d{11}$))/.test(phoneNo)
        },
      },
      penName: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(100),
      },
      title: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(100),
      },
      drive: {
        required,
        isDrive(drive) {
          return /^((https:\/\/)?(www.)?(drive.google.com\/drive\/folders\/){1}[a-zA-Z0-9_-]+(\?usp=sharing)\b)$/.test(
            drive
          )
        },
      },
    },
  },
}
</script>
