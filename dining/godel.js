function aaa (tname) {
  //alert("jjj")
  table = document.getElementById(tname);
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    //td = tr[i].getElementsByTagName("td")[4];
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      console.log(td[j].innerHTML)
    }
    //console.log(td.length)
    //if (td) {
    //  console.log(td.innerHTML)
    //    //if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //    //  tr[i].style.display = "";
    //    //} else {
    //    //  tr[i].style.display = "none";
    //    //}
    //}       
  }
}
// do_gg
// {{{
function do_gg() {
  var disp = "";
  disp = disp + "gg ";

  var dir = window.location.href;

  // Assemble disp to: gg /path/to/.index.htm
  disp = disp + dir + "\n";

  document.getElementById("text_board").value =  disp;
  var copyText = document.getElementById("text_board");
  document.getElementById("text_board").style.display = "inline"

  // Select the text
  copyText.select();

  // Copy to system clipboard
  document.execCommand("Copy");
  document.getElementById("text_board").style.display = "none"
}
// }}}
// cd2dir
// {{{
function cd2dir() {
  var disp = "";
  disp = disp + "hcd ";
  var dir = window.location.href;
  disp = disp + dir + "\n";
  document.getElementById("text_board").value =  disp;
  var copyText = document.getElementById("text_board");
  document.getElementById("text_board").style.display = "inline"
  copyText.select();
  document.execCommand("Copy");
  document.getElementById("text_board").style.display = "none"
}
// }}}
// filter_toc
// {{{
function filter_toc() {
  var input, filter, i;

// Get input value
  input = document.getElementById("filter_input");
  filter = input.value;

// Get all a href
  var aa = document.querySelectorAll("a");
  for (i = 0; i < aa.length; i++) {
    // Display only if you can find id matches filter
    if (aa[i].id.indexOf(filter) > -1) {
      aa[i].style.display = "";
    } else {
      aa[i].style.display = "none";
    }
  }
}
// }}}
// filter_gnotes
function filter_gnotes() {
  var input = document.getElementById("filter_input");
  filter = input.value.toUpperCase();

  var x = document.getElementsByClassName("gnotes");

  for (i = 0; i < x.length; i++) {
    //console.log(x[i].innerHTML);
    y = x[i].getElementsByClassName("keywords");
    if (y[0]) {
      if (y[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
        //console.log(y[0].innerHTML);
        x[i].style.display = "";
      } else {
        x[i].style.display = "none";
        //console.log("not found")
      }
    }
  }
}
// filter_table
// {{{
function filter_table(tname, column_no) {
  var input, filter, table, tr, td, i;

  input = document.getElementById("filter_table_input");
  filter = input.value.toUpperCase();

  table = document.getElementById(tname);
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[column_no];
    if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
    }       
  }
}
// }}}
// refresh
// {{{
function refresh() {
  var disp = "";
  disp = disp + "<inst>\n";
  disp = disp + "<command>cd ";
  var dir = window.location.href;
  var newdir = dir.replace("file:///C:/cygwin64","");
  newdir = newdir.substr(0, newdir.lastIndexOf("/"));
  disp = disp + newdir + "</command>" + "\n";
  disp = disp + "<command>godel_draw</command>\n";
  disp = disp + "</inst>\n";
  document.getElementById("text_board").value =  disp;
  var copyText = document.getElementById("text_board");
  document.getElementById("text_board").style.display = "inline"
  copyText.select();
  document.execCommand("Copy");
}
// }}}
// paste2clipb
// {{{
function paste2clipb(tfile) {
  var disp = "";
  disp = disp + "<inst>\n";
  disp = disp + "<command>exec tcsh -fc \"xterm -hold -e " + tfile + "\"</command>\n";
  disp = disp + "</inst>\n";

  document.getElementById("text_board").value =  disp;
  var copyText = document.getElementById("text_board");
  document.getElementById("text_board").style.display = "inline"
  copyText.select();
  document.execCommand("Copy");
  document.getElementById("text_board").style.display = "none"

}
// }}}
// vim:fdm=marker
