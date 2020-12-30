import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import debounce from "lodash/debounce";

export const CROPPER = {
  data: function() {
    return {
      cropper: null,
      objectUrl: null,
      previewCropped: null,
      selectedFile: null,
      debouncedUpdatePreview: null,
      radio: null,
      zoomable: false
    };
  },
  mounted() {
    this.debouncedUpdatePreview = debounce(this.updatePreview, 257);
  },
  methods: {
    resetCropper() {
      this.cropper.reset();
    },
    rotateLeft() {
      this.cropper.rotate(-90);
    },
    rotateRight() {
      this.cropper.rotate(90);
    },
    setupCropper(selectedFile) {
      if (this.cropper) {
        this.cropper.destroy();
      }

      if (this.objectUrl) {
        window.URL.revokeObjectURL(this.objectUrl);
      }

      if (!selectedFile) {
        this.cropper = null;
        this.objectUrl = null;
        this.previewCropped = null;
        return;
      }

      this.objectUrl = window.URL.createObjectURL(selectedFile);
      this.$nextTick(this.setupCropperInstance);
    },
    setupCropperInstance() {
      this.cropper = new Cropper(this.$refs.source, {
        aspectRatio: this.radio,
        crop: this.debouncedUpdatePreview,
        zoomable: this.zoomable
      });
    },
    updatePreview(event) {
      const canvas = this.cropper.getCroppedCanvas();
      this.previewCropped = canvas.toDataURL("image/png");
    }
  }
};
