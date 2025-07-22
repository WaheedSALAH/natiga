// let data = [];

// fetch('results.json')
//   .then(response => response.json())
//   .then(json => data = json)
//   .catch(err => console.error("فشل تحميل النتائج:", err));

// function searchResult() {
//   const input = document.getElementById('searchInput').value.trim();
//   const resultDiv = document.getElementById('result');

//   if (!input) {
//     resultDiv.innerHTML = "<p style='color:red;'>من فضلك أدخل رقم الجلوس</p>";
//     return;
//   }

//   const student = data.find(item => item.seating_no.toString() === input);

//   if (student) {
//     resultDiv.innerHTML = `
//       <p><strong>الاسم:</strong> ${student.arabic_name}</p>
//       <p><strong>المجموع الكلي:</strong> ${student.total_degree}</p>
//     `;
//   } else {
//     resultDiv.innerHTML = "<p style='color:red;'>لم يتم العثور على الطالب</p>";
//   }
// }

// let data = [];

// fetch('./results.json')
//   .then(response => response.json())
//   .then(json => data = json)
//   .catch(err => console.error("فشل تحميل النتائج:", err));

// function searchResult() {
//   const input = document.getElementById('searchInput').value.trim();
//   const resultDiv = document.getElementById('result');

//   if (!input) {
//     resultDiv.innerHTML = "<p style='color:red;'>من فضلك أدخل رقم الجلوس أو الاسم</p>";
//     return;
//   }

//   // البحث برقم الجلوس أو الاسم
//   const student = data.find(item =>
//     item.seating_no.toString() === input || 
//     item.arabic_name.trim().includes(input)
//   );

//   if (student) {
//     resultDiv.innerHTML = `
//       <p><strong>رقم الجلوس:</strong> ${student.seating_no}</p>
//       <p><strong>الاسم:</strong> ${student.arabic_name}</p>
//       <p><strong>المجموع الكلي:</strong> ${student.total_degree}</p>
//     `;
//   } else {
//     resultDiv.innerHTML = "<p style='color:red;'>لم يتم العثور على الطالب</p>";
//   }
// }

async function searchResult() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.innerHTML = "<p style='color:red;'>من فضلك أدخل رقم الجلوس أو الاسم</p>";
    return;
  }

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/WaheedSALAH/natiga/main/results.json"
    );
    if (!response.ok) throw new Error("فشل تحميل البيانات");

    const data = await response.json();

    const student = data.find(
      item =>
        item.seating_no.toString() === input ||
        item.arabic_name.includes(input)
    );

    if (student) {
      resultDiv.innerHTML = `
        <p><strong>رقم الجلوس:</strong> ${student.seating_no}</p>
        <p><strong>الاسم:</strong> ${student.arabic_name}</p>
        <p><strong>المجموع الكلي:</strong> ${student.total_degree}</p>
      `;
    } else {
      resultDiv.innerHTML = "<p style='color:red;'>لم يتم العثور على الطالب</p>";
    }
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = "<p style='color:red;'>حدث خطأ أثناء جلب البيانات</p>";
  }
}
