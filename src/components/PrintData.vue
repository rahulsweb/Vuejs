<template>
  <div>
       <div class="card">
      <div class="card-body">
        <h5 class="card-title">Scan QR code</h5>
        <p class="card-text">Scan your code</p>
        <button type="button" class="btn btn-primary" @click="scanQR">
         Scan QR
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Chanakya Neeti</h5>
        <p class="card-text">Ebook For Reading</p>
        <button type="button" class="btn btn-primary" @click="myPrint">
          Print PDF On Button click
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Chanakya Neeti</h5>
        <p class="card-text">Ebook For Reading</p>
        <button type="button" class="btn btn-success" @click="redirect">
          <strong>When Page Load Print Pdf</strong>
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Download Multiple Files At a time</h5>
        <p class="card-text">Books For Reading</p>
        <button type="button" class="btn btn-primary" @click="downloadFiles">
          Download Multiple Files
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import printJS from 'print-js';
export default {
  data() {
    return {};
  },

  methods: {
    myPrint() {
      var page = window.open("chanakya.pdf");
      console.log(page);
      page.print();
    },
    redirect() {
      this.$router.push({ path: "/print" });
    },
     scanQR() {
      this.$router.push({ path: "/scan" });
    },
    downloadFiles(e) {
      //      window.open('chanakya.pdf');
      // window.open('a.txt');

      e.preventDefault();
      var filesForDownload = [
        { path: "Test.txt", name: "file1.txt" },
        { path: "chanakya.pdf", name: "chanakya.pdf" },
         { path: "neeti.pdf", name: "neeti.pdf" },
          { path: "english.pdf", name: "english.pdf" },
           { path: "tense.docx", name: "tense.docx" },
      ];

      var temporaryDownloadLink = document.createElement("a");
      temporaryDownloadLink.style.display = "none";

      document.body.appendChild(temporaryDownloadLink);
      for (var n = 0; n < filesForDownload.length; n++) {
        var download = filesForDownload[n];
        temporaryDownloadLink.setAttribute("href", download.path);
        temporaryDownloadLink.setAttribute("download", download.name);

        temporaryDownloadLink.click();
      }

      document.body.removeChild(temporaryDownloadLink);
    },
  },
};
</script>
<style lang="stylus" scoped></style>