const profilepics = document.getElementById('profile-pics')

const inputfile = document.getElementById('input-file')

inputfile.onchange = function () {
  profilepics.src = URL.createObjectURL(inputfile.files[0])
}
