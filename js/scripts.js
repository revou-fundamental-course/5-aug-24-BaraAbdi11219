 /* js */
 function calculateBMI (){
 //ambil nilai input
     const height = document.getElementById("height").value;
     const weight = document.getElementById("weight").value;
     const age = document.getElementById("age").value;
     const genderMale = document.getElementById("male").checked;
     const genderFemale = document.getElementById("female").checked;
    
 //validasi input
     if(height=== "" || weight === ""|| age=== "" || (!genderMale && !genderFemale)){
         alert("mohon lengkapi semua");
         return;
     }

    //hitung BMI
    
    let bmi = weight / (height/100)** 2
    let result = bmi.toFixed(2)
    document.getElementById("result-bmi").innerHTML = result;
    
     //hasil
    if(bmi<18.5){
        document.getElementById("result-title").innerHTML = "UNDERWEIGHT";
        document.getElementById("result-desc").innerHTML = "Anda Kekurangan Berat Badan";
        document.getElementById("result-text").innerHTML = "Hasil BMI berada dibawah 18,5";
        document.getElementById("suggestion-text").innerHTML = "Anda berada pada kategori KEKURANGAN BERAT BADAN";
        document.getElementById("advice-text").innerHTML = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal.";
        document.getElementById("risk-title").innerHTML = "Beberapa penyakit yang berasal dari UNDERWEIGHT";
        document.getElementById("list-risk").innerHTML = "<li>Kekurangan gizi</li><li>Gangguan pertumbuhan</li><li>Sistem kekebalan tubuh lemah</li><li>Gangguan kesuburan</li>";
        
        
    }else if(bmi<25){
        document.getElementById("result-title").innerHTML = "NORMAL";
        document.getElementById("result-desc").innerHTML = "Berat Badan Anda Normal";
        document.getElementById("result-text").innerHTML = "Hasil BMI diantara 18.5 dan 25";
        document.getElementById("suggestion-text").innerHTML = "Anda berada pada kategori NORMAL";
        document.getElementById("advice-text").innerHTML = "Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat.";
        document.getElementById("risk-title").innerHTML = "Beberapa penyakit kategori berat badan Normal";
        document.getElementById("list-risk").innerHTML = "<li>Tidak ada</li>";
    }
    else if(bmi<30){
        document.getElementById("result-title").innerHTML = "OVERWEIGHT";
        document.getElementById("result-desc").innerHTML = "Berat Badan Anda Berlebihan";
        document.getElementById("result-text").innerHTML = "Hasil BMI diantara 26 dan 30";
        document.getElementById("suggestion-text").innerHTML = "Anda berada pada kategori BERAT BADAN BERLEBIH";
        document.getElementById("advice-text").innerHTML = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        document.getElementById("risk-title").innerHTML = "Beberapa penyakit yang berasal dari OVERWEIGHT";
        document.getElementById("list-risk").innerHTML = "<li>Diabetes Tipe 2</li><li>Serangan Jantung</li><li>Hipertensi</li><li>Kolesterol Tinggi</li>";
    }else {
        document.getElementById("result-title").innerHTML = "OBESITAS";
        document.getElementById("result-desc").innerHTML = "Anda Kegemukan Berat Badan Berlebihan";
        document.getElementById("result-text").innerHTML = "Hasil BMI lebih dari 30";
        document.getElementById("suggestion-text").innerHTML = "Anda berada pada kategori OBESITAS";
        document.getElementById("advice-text").innerHTML = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk Olahraga dan Diet untuk mengurangi berat badan hingga batas normal.";
        document.getElementById("risk-title").innerHTML = "Beberapa penyakit yang berasal dari OBESITAS";
        document.getElementById("list-risk").innerHTML = "<li>Penyakit Jantung</li><li>Stroke</li><li>Kanker</li><li>Masalah Pencernaan</li>";
    }



}
