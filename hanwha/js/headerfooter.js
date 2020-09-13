//  메뉴 하버
document.querySelector('.coinfo').addEventListener('mouseenter',function(){
  document.querySelector('.co').style.display = "block";
})
document.querySelector('.co').addEventListener('mouseenter',function(){
  document.querySelector('.co').style.display = "block";
})
document.querySelector('.coinfo').addEventListener('mouseleave',function(){
  document.querySelector('.co').style.display = "none";
})
document.querySelector('.co').addEventListener('mouseleave',function(){
  document.querySelector('.co').style.display = "none";
})


document.querySelector('.investinfo').addEventListener('mouseenter',function(){
  document.querySelector('.in').style.display = "block";
})
document.querySelector('.in').addEventListener('mouseenter',function(){
  document.querySelector('.in').style.display = "block";
})
document.querySelector('.investinfo').addEventListener('mouseleave',function(){
  document.querySelector('.in').style.display = "none";
})
document.querySelector('.in').addEventListener('mouseleave',function(){
  document.querySelector('.in').style.display = "none";
})


document.querySelector('.coarea').addEventListener('mouseenter',function(){
    document.querySelector('.area').style.display = "block";
})
document.querySelector('.area').addEventListener('mouseenter',function(){
    document.querySelector('.area').style.display = "block";
})
document.querySelector('.coarea').addEventListener('mouseleave',function(){
    document.querySelector('.area').style.display = "none";
})
document.querySelector('.area').addEventListener('mouseleave',function(){
    document.querySelector('.area').style.display = "none";
})


document.querySelector('.recruit').addEventListener('mouseenter',function(){
    document.querySelector('.recru').style.display = "block";
})
document.querySelector('.recru').addEventListener('mouseenter',function(){
    document.querySelector('.recru').style.display = "block";
})
document.querySelector('.recruit').addEventListener('mouseleave',function(){
    document.querySelector('.recru').style.display = "none";
})
document.querySelector('.recru').addEventListener('mouseleave',function(){
    document.querySelector('.recru').style.display = "none";
})


document.querySelector('.adver').addEventListener('mouseenter',function(){
    document.querySelector('.ad').style.display = "block";
})
document.querySelector('.ad').addEventListener('mouseenter',function(){
    document.querySelector('.ad').style.display = "block";
})
document.querySelector('.adver').addEventListener('mouseleave',function(){
    document.querySelector('.ad').style.display = "none";
})
document.querySelector('.ad').addEventListener('mouseleave',function(){
    document.querySelector('.ad').style.display = "none";
})

// 버튼 메뉴 확장
document.querySelector('.btnopen').addEventListener('click',function(){
    document.querySelector('.ep').style.display = "block";
    document.querySelector('.btnopen').style.display = "none";
    document.querySelector('.btnclose').style.display = "inline";
    document.querySelector('.navi').style.border = "none";
    document.querySelector('.coinfo').addEventListener('mouseenter',function(){
      document.querySelector('.co').style.display = "none";
    })
    document.querySelector('.investinfo').addEventListener('mouseenter',function(){
      document.querySelector('.in').style.display = "none";
    })
    document.querySelector('.coarea').addEventListener('mouseenter',function(){
      document.querySelector('.area').style.display = "none";
    })
    document.querySelector('.recruit').addEventListener('mouseenter',function(){
      document.querySelector('.recru').style.display = "none";
    })
    document.querySelector('.adver').addEventListener('mouseenter',function(){
      document.querySelector('.ad').style.display = "none";
    })
    document.querySelector('.whomenu').style.display = "none";
    document.querySelector('.whologoopen').style.display = "inline";
    document.querySelector('.whologoclose').style.display = "none";
    document.getElementById('footer').style.display="none";
 })

 document.querySelector('.btnclose').addEventListener('click',function(){
    document.querySelector('.ep').style.display = "none";
    document.querySelector('.btnclose').style.display = "none";
    document.querySelector('.btnopen').style.display = "inline";
    document.querySelector('.navi').style.borderBottom= "1px solid #dadada";
    document.querySelector('.coinfo').addEventListener('mouseenter',function(){
      document.querySelector('.co').style.display = "block";
    })
    document.querySelector('.co').addEventListener('mouseenter',function(){
      document.querySelector('.co').style.display = "block";
    })
    document.querySelector('.coinfo').addEventListener('mouseleave',function(){
      document.querySelector('.co').style.display = "none";
    })
    document.querySelector('.co').addEventListener('mouseleave',function(){
      document.querySelector('.co').style.display = "none";
    })
    
    document.querySelector('.investinfo').addEventListener('mouseenter',function(){
      document.querySelector('.in').style.display = "block";
    })
    document.querySelector('.in').addEventListener('mouseenter',function(){
      document.querySelector('.in').style.display = "block";
    })
    document.querySelector('.investinfo').addEventListener('mouseleave',function(){
      document.querySelector('.in').style.display = "none";
    })
    document.querySelector('.in').addEventListener('mouseleave',function(){
      document.querySelector('.in').style.display = "none";
    })
    
    document.querySelector('.coarea').addEventListener('mouseenter',function(){
        document.querySelector('.area').style.display = "block";
    })
    document.querySelector('.area').addEventListener('mouseenter',function(){
        document.querySelector('.area').style.display = "block";
    })
    document.querySelector('.coarea').addEventListener('mouseleave',function(){
        document.querySelector('.area').style.display = "none";
    })
    document.querySelector('.area').addEventListener('mouseleave',function(){
        document.querySelector('.area').style.display = "none";
    })
    
    document.querySelector('.recruit').addEventListener('mouseenter',function(){
        document.querySelector('.recru').style.display = "block";
    })
    document.querySelector('.recru').addEventListener('mouseenter',function(){
        document.querySelector('.recru').style.display = "block";
    })
    document.querySelector('.recruit').addEventListener('mouseleave',function(){
        document.querySelector('.recru').style.display = "none";
    })
    document.querySelector('.recru').addEventListener('mouseleave',function(){
        document.querySelector('.recru').style.display = "none";
    })
    
    document.querySelector('.adver').addEventListener('mouseenter',function(){
        document.querySelector('.ad').style.display = "block";
    })
    document.querySelector('.ad').addEventListener('mouseenter',function(){
        document.querySelector('.ad').style.display = "block";
    })
    document.querySelector('.adver').addEventListener('mouseleave',function(){
        document.querySelector('.ad').style.display = "none";
    })
    document.querySelector('.ad').addEventListener('mouseleave',function(){
        document.querySelector('.ad').style.display = "none";
    })
    document.getElementById('footer').style.display="block";
})

// who
document.querySelector('.whologoopen').addEventListener('click',function(){
  document.querySelector('.whomenu').style.display = "block";
  document.querySelector('.whologoopen').style.display = "none";
  document.querySelector('.whologoclose').style.display = "inline";
  document.querySelector('.ep').style.display = "none";
  document.querySelector('.btnclose').style.display = "none";
  document.querySelector('.btnopen').style.display = "inline";
  document.querySelector('.navi').style.borderBottom= "1px solid #dadada";
  document.querySelector('.coinfo').addEventListener('mouseenter',function(){
    document.querySelector('.co').style.display = "none";
  })
  document.querySelector('.investinfo').addEventListener('mouseenter',function(){
    document.querySelector('.in').style.display = "none";
  })
  document.querySelector('.coarea').addEventListener('mouseenter',function(){
    document.querySelector('.area').style.display = "none";
  })
  document.querySelector('.recruit').addEventListener('mouseenter',function(){
    document.querySelector('.recru').style.display = "none";
  })
  document.querySelector('.adver').addEventListener('mouseenter',function(){
    document.querySelector('.ad').style.display = "none";
  })
  document.getElementById('footer').style.display="block";
})

document.querySelector('.whologoclose').addEventListener('click',function(){
  document.querySelector('.whomenu').style.display = "none";
  document.querySelector('.whologoopen').style.display = "inline";
  document.querySelector('.whologoclose').style.display = "none";
  document.querySelector('.navi').style.borderBottom= "1px solid #dadada";
    document.querySelector('.coinfo').addEventListener('mouseenter',function(){
      document.querySelector('.co').style.display = "block";
    })
    document.querySelector('.co').addEventListener('mouseenter',function(){
      document.querySelector('.co').style.display = "block";
    })
    document.querySelector('.coinfo').addEventListener('mouseleave',function(){
      document.querySelector('.co').style.display = "none";
    })
    document.querySelector('.co').addEventListener('mouseleave',function(){
      document.querySelector('.co').style.display = "none";
    })
    
    document.querySelector('.investinfo').addEventListener('mouseenter',function(){
      document.querySelector('.in').style.display = "block";
    })
    document.querySelector('.in').addEventListener('mouseenter',function(){
      document.querySelector('.in').style.display = "block";
    })
    document.querySelector('.investinfo').addEventListener('mouseleave',function(){
      document.querySelector('.in').style.display = "none";
    })
    document.querySelector('.in').addEventListener('mouseleave',function(){
      document.querySelector('.in').style.display = "none";
    })
    
    document.querySelector('.coarea').addEventListener('mouseenter',function(){
        document.querySelector('.area').style.display = "block";
    })
    document.querySelector('.area').addEventListener('mouseenter',function(){
        document.querySelector('.area').style.display = "block";
    })
    document.querySelector('.coarea').addEventListener('mouseleave',function(){
        document.querySelector('.area').style.display = "none";
    })
    document.querySelector('.area').addEventListener('mouseleave',function(){
        document.querySelector('.area').style.display = "none";
    })
    
    document.querySelector('.recruit').addEventListener('mouseenter',function(){
        document.querySelector('.recru').style.display = "block";
    })
    document.querySelector('.recru').addEventListener('mouseenter',function(){
        document.querySelector('.recru').style.display = "block";
    })
    document.querySelector('.recruit').addEventListener('mouseleave',function(){
        document.querySelector('.recru').style.display = "none";
    })
    document.querySelector('.recru').addEventListener('mouseleave',function(){
        document.querySelector('.recru').style.display = "none";
    })
    
    document.querySelector('.adver').addEventListener('mouseenter',function(){
        document.querySelector('.ad').style.display = "block";
    })
    document.querySelector('.ad').addEventListener('mouseenter',function(){
        document.querySelector('.ad').style.display = "block";
    })
    document.querySelector('.adver').addEventListener('mouseleave',function(){
        document.querySelector('.ad').style.display = "none";
    })
    document.querySelector('.ad').addEventListener('mouseleave',function(){
        document.querySelector('.ad').style.display = "none";
    })
})

// 아이콘 하버
document.querySelector('.facebook').addEventListener('mouseenter',function(){
  document.querySelector('.facebook').src = "img/facebook2.png";
})
document.querySelector('.facebook').addEventListener('mouseleave',function(){
  document.querySelector('.facebook').src = "img/facebook1.png";
})

document.querySelector('.post').addEventListener('mouseenter',function(){
  document.querySelector('.post').src = "img/post2.png";
})
document.querySelector('.post').addEventListener('mouseleave',function(){
  document.querySelector('.post').src = "img/post1.png";
})

