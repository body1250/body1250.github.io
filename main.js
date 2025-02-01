let myphotos = [
    "images/myimg1.jpg",
    "images/myimg2.jpg",
    "images/myimg3.jpg",
    "images/myimg4.jpg",
    "images/myimg5.jpg",
  ];
  
  let thepointsD = document.querySelector('.points');
  let theParentPhoto = document.querySelector('.myimgs img');
  let intervalId; // معرف الفاصل الزمني
  let currentIndex = 0; // المؤشر الحالي للصورة
  
  thepointsD.innerHTML = '<span></span>'.repeat(myphotos.length);
  
  thepointsD.children[0].style.backgroundColor = '#c39f7c';
  
  function updatePhoto(div, arrayOfPhoto, photoElement, index) {
      // إعادة تعيين الخلفيات إلى اللون الأحمر
      for (let j = 0; j < div.children.length; j++) {
          div.children[j].style.backgroundColor = 'white';
      }
  
      // تعيين الخلفية للعنصر الحالي وتحديث الصورة
      div.children[index].style.backgroundColor = '#c39f7c';
      photoElement.setAttribute('src', `${arrayOfPhoto[index]}`);
  }
  
  function loop(div, arrayOfPhoto, photoElement) {
      // تحديث الصورة على الفور عند ظهور العنصر لأول مرة
      updatePhoto(div, arrayOfPhoto, photoElement, currentIndex);
  
      // بدء الفاصل الزمني لتكرار تحديث الصورة
      intervalId = setInterval(() => {
          currentIndex = (currentIndex + 1) % arrayOfPhoto.length;
          updatePhoto(div, arrayOfPhoto, photoElement, currentIndex);
      }, 2000); // تغيير الصورة كل ثانية
  }
  
  // تعريف مراقب التقاطع
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // إذا كان العنصر مرئيًا و `intervalId` غير معرف، استدعاء الدالة لبدء التكرار
              if (!intervalId) {
                  loop(thepointsD, myphotos, theParentPhoto);
              }
          } else {
              // إذا لم يعد العنصر مرئيًا، إيقاف التكرار
              clearInterval(intervalId);
              intervalId = null; // إعادة تعيين `intervalId`
          }
      });
  }, { threshold: .1 }); // trigger when 100% of the element is visible
  
  // مراقبة theParentPhoto
  observer.observe(theParentPhoto);
  

  