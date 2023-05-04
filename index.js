let text = " Our mission is to help you take care of yourself by providing you with valuable information and resources about your health. We understand that your health is important to you, and that's why we're dedicated to providing you with the tools and knowledge you need to live a healthy and happy life.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("intro").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

document.getElementById("btn").addEventListener("click", function () {
  let height = document.getElementById("height").value / 100
  let weight = document.getElementById("weight").value
  let bmi = weight / (height * height)
  document.getElementById("bmi").innerHTML = "Your BMI is : " + bmi.toFixed(1);
  if (isNaN(bmi)) {
    document.getElementById("bmi").innerHTML = "Please enter valid values for height and weight.";
  }
  else if (bmi < 18) {
    document.getElementById("btn-category").innerHTML = `
<h1>
Your BMI category is: Underweight
</h1>
<p>
1- 	It’s important to avoid being underweight, especially as you get older. Being underweight can affect your ability to fight infections and recover from illness. It can also weaken your muscles, including your heart, and increase your risk of falls.</p>
<br> 
<p>
2- Aim to keep within the recommended weight range by eating a healthy, balanced diet.</p>
<br>
<p>
3- 	If you’re losing weight without trying, talk to your GP or practice nurse to make sure that there aren’t any other problems causing this.
</p>
`
  } else if (bmi >= 18 && bmi <= 23) {
    document.getElementById("btn-category").innerHTML =
      `
  <h1>
  Your BMI category is: Healthy
  </h1>
  <p>
  1- You're a healthy weight for your height. We recommend that you check your waist measurement too, as carrying weight around your middle can also put your health at risk</p>
  <br> 
  <p>
  2- Aim to keep within the recommended weight range by eating a healthy, balanced diet and being physically active on a regular basis. The minimum level of physical activity recommended for adults is 150 minutes per week, but aim to be active every day. Every time you’re active for 10 minutes or more it counts.</p>
  <br>
  <p>
 3- If you do have any concerns about your weight or want to know more about improving your diet and exercise, talk to your GP or practice nurse.
  </p>
  `
  }
  else if (bmi >= 23.1 && bmi <= 27.5) {
    document.getElementById("btn-category").innerHTML = `
      <h1>
      Your BMI category is: Overweight
      </h1>
      <p>
      1- Being overweight can raise your blood pressure and cholesterol levels, and can increase your risk of developing Type 2 diabetes. These health conditions increase your risk of developing heart and circulatory diseases. Keeping to a healthy weight will help you control your blood pressure and cholesterol levels, and help keep your heart healthy</p>
      <br> 
      <p>
      2-	Aim to reach (and stay within) the recommended weight range by eating a healthier diet, reducing your portion sizes and being more active. The minimum level of physical activity recommended for adults is 150 minutes per week, but aim to be active every day. Every time you are active for 10 minutes or more it counts.</p>
      <br>
      <p>
     3- If you do have any concerns about your weight or want to know more about improving your diet and exercise, talk to your GP or practice nurse. They can advise you on how to eat healthily and get more active, and tell you about local services you can use to get support.
      </p>
      `

  }
  else {
    document.getElementById("btn-category").innerHTML = `
      <h1>
      Your BMI category is: Obese
      </h1>
      <p>
      1- As your BMI increases, your risk of developing heart and circulatory diseases, as well as many other health conditions including diabetes, stroke, vascular dementia and some cancers, increases. It’s important that you take steps to lose weight. The good news is that losing even small amounts of weight can benefit your health</p>
      <br> Try to lose weight and aim to reach the recommended weight range by eating a healthier diet, reducing your portion sizes and being more active. The minimum level of physical activity recommended for adults is 150 minutes per week, but aim to be active every day. Every time you are active for 10 minutes or more it counts.</p>
      <br>
      <p>
     3- 	If your BMI is over 35, see your GP or practice nurse. They can advise you on how to eat healthily and get more active, and tell you about local services you can use to get support.
      </p>
      `
  }
})
