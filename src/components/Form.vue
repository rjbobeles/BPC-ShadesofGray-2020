<template>
  <div>
    <form method="post" @submit.prevent="checkForm">
      <div class="input-group">
        <p class="font-bold text-smoke text-sm">Full Name:</p>
        <input
          type="text"
          name="name"
          id="name"
          v-model.trim="userData.name"
          placeholder="[Last Name, First Name]"
          class="w-full"
          :class="[$v.userData.name.$error ? 'hasError' : '']"
          @blur="$v.userData.name.$touch()"
        />
        <span v-show="$v.userData.name.$error" v-if="!submitted" class="text-xs error self-start">
          Name must follow the format: Last Name, First Name
        </span>
      </div>
      <div class="input-group">
        <div>
          <p class="font-bold text-smoke text-sm">ID Number:</p>
          <input
            type="text"
            name="idNumber"
            id="idNumber"
            v-model.trim="userData.idNumber"
            placeholder="[11812345]"
            class="w-full"
            :class="[$v.userData.idNumber.$error ? 'hasError' : '']"
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
      <div class="input-group">
        <p class="font-bold text-smoke text-sm">Benilde Mail:</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="[name.surname@benilde.edu.ph]"
          class="w-full"
          :class="[$v.userData.email.$error ? 'hasError' : '']"
          v-model.trim="userData.email"
          @blur="$v.userData.email.$touch()"
        />
        <span v-show="$v.userData.email.$error" v-if="!submitted" class="text-xs error self-start">
          Email must be a valid benilde email
        </span>
      </div>
      <div class="input-group">
        <p class="font-bold text-smoke text-sm">Course:</p>
        <multiselect
          v-if="courses"
          v-model.trim="userData.course"
          deselect-label="Select another course to remove"
          track-by="id"
          :custom-label="courseLabel"
          placeholder="[Type your course]"
          :options="courses"
          :searchable="true"
          :allow-empty="false"
          :max-height="300"
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
      <div class="input-group">
        <p class="font-bold text-smoke text-sm">Phone Number:</p>
        <input
          type="text"
          name="phoneNo"
          id="phoneNo"
          v-model.trim="userData.phoneNo"
          placeholder="[0923 456 7890]"
          class="w-full"
          :class="[$v.userData.phoneNo.$error ? 'hasError' : '']"
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
      <div class="input-group">
        <div>
          <p class="font-bold text-smoke text-sm">Pen Name:</p>
          <input
            type="text"
            name="penName"
            id="penName"
            v-model.trim="userData.penName"
            placeholder="[-]"
            class="w-full"
            :class="[$v.userData.penName.$error ? 'hasError' : '']"
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
      <div class="input-group">
        <div>
          <p class="font-bold text-smoke text-sm">Title Piece:</p>
          <input
            type="text"
            name="title"
            id="title"
            v-model.trim="userData.title"
            placeholder="[Title]"
            class="w-full"
            :class="[$v.userData.title.$error ? 'hasError' : '']"
            @blur="$v.userData.title.$touch()"
          />
        </div>
        <span v-show="$v.userData.title.$error" v-if="!submitted" class="text-xs error self-start">
          Title must be 1-100 characters
        </span>
      </div>
      <div class="input-group">
        <p class="font-bold text-smoke text-sm">Enter your piece here:</p>
        <input
          name="drive"
          id="drive"
          v-model.trim="userData.drive"
          placeholder="[Google Docs link]"
          class="w-full"
          :class="[$v.userData.drive.$error ? 'hasError' : '']"
          @blur="$v.userData.drive.$touch()"
        />
        <span v-show="$v.userData.drive.$error" v-if="!submitted" class="text-xs error self-start">
          Google Drive link must be a valid and has sharing enabled.
        </span>
      </div>
      <div class="input-group">
        <p class="text-xs text-smoke">
          Any submitted content in Shades of Gray: Epilogue becomes the property of the Benildean
          Press Corps (BPC) and the Student Publications Unit (SPU). By willingly submitting to
          Shades of Gray: Epilogue, the contributor gives permission to use the said content in any
          way BPC and SPU see fit. In addition, all submissions must be original works. If found
          guilty of plagiarism, violators will be subject to the College’s rules and regulations.
        </p>
        <div class="mt-8">
          <button
            type="submit"
            class="bg-black text-ash px-4 py-2 text-2xl gotham-light submit-button"
          >
            Submit
          </button>
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
          this.submitted = false
          this.hasError = true
          this.$router.push({ name: 'Thanks' })
        })
        .catch(() => {
          this.submitting = false
          this.hasError = true
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
          return /^(((\s)?[A-Z][a-z]*)+,((\s)[A-Z][a-z]*)+)$/.test(name)
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
          return /(09)[0-9]{2}(\s)[0-9]{3}(\s)[0-9]{4}\b/.test(phoneNo)
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

<style scoped lang="scss">
.input-group {
  margin-bottom: 2.5rem;
  input {
    padding: 0.5rem 0;
    border-bottom: 1px solid #333;
    font-size: 1.75rem;
    font-family: 'gotham-light', sans-serif;
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  input:focus {
    outline: none;
  }

  .error {
    color: rgba(202, 96, 96, 0.938);
    font-family: 'Georgia', serif;
    font-weight: bold;
  }

  .hasError {
    background-color: rgb(250, 245, 247);
  }
}

@media (max-width: 767px) {
  .input-group {
    input {
      font-size: 1.25rem;
    }
  }
}
</style>
