$("#boton").click(function () {
  $.get("http://localhost:5000/amigos", (data) => {
    $("#loading").hide();
    let lista = $("#lista");
    lista.empty();
    for (let amigo of data) {
      let li = document.createElement("li");
      li.innerText = amigo.name;
      lista.append(li);
    }
  });
});

$("#search").click(function () {
  let id = $("#input").val();
  $("#input").val("");
  $.get("http://localhost:5000/amigos/" + id, (amigo) => {
    $("#amigo").text(amigo.name);
  });
});

$("#delete").click(function () {
  let id = $("#inputDelete").val();
   $("#inputDelete").val("");
  $.ajax({
    url: "http://localhost:5000/amigos/" + id,
    type: "DELETE",
    success: () => {
      $("#sucess").text(`El amigo con el id ${id} se ha eliminado correctamente`);
    },
  });
});
