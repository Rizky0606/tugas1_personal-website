let data = [1, 2, 3, 4];

function handleAddProject(e) {
  e.preventDefault();
  let name = document.getElementById("input-name").value;
  let startDate = document.getElementById("date-start").value;
  let endDate = document.getElementById("date-end").value;
  let description = document.getElementById("input-description").value;
  let file = document.getElementById("input-file").files;

  if (
    name == "" ||
    startDate == "" ||
    endDate == "" ||
    description == ""
    // ||
    // file == ""
  ) {
    return alert("Form tidak boleh kosong");
  }

  let project = {
    name,
    startDate,
    endDate,
    description,
    file,
  };

  data.push(project);

  renderProject();
}

function renderProject() {
  document.getElementById("card-project").innerHTML = "";

  for (let index = 0; index < data; index++) {
    //   document.getElementById("card-project").innerHTML += `
    //   <div class="row">
    //     <img src="${data[index].image}" alt="" />
    //     <h3>${data[index].name}</h3>
    //     <p>durasi : 3 bulan</p>
    //     <p>
    //       ${data[index].description}
    //     </p>
    //     <div class="icon">
    //       <i class="fa-brands fa-android" style="color: #000000"></i>
    //       <i class="fa-brands fa-java" style="color: #000000"></i>
    //     </div>
    //     <div class="button-group">
    //       <button>edit</button>
    //       <button>delete</button>
    //     </div>
    // </div>
    //   `;
    console.log(data);
  }
}
