document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面路径
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 更新导航栏活动状态
    updateNavActive(currentPage);
    
    // 如果是联系页面，添加表单提交处理
    if (currentPage === 'contact.html') {
        setupContactForm();
    }
    
    // 首页特定功能
    if (currentPage === 'index.html') {
        setupHomePage();
    }
});

// 自动更新年份
document.getElementById('copyright-year').textContent = new Date().getFullYear();

function updateNavActive() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const path = /ccc.github.io/index.html
    
    // 提取文件名
    let currentPage = path.split('/').pop();
    if (!currentPage) {
        currentPage = 'index.html'; // 处理根目录情况
    }
    
    navLinks.forEach(link => {
        // 确保链接路径也是相对路径
        let linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 在DOM加载完成后调用
document.addEventListener('DOMContentLoaded', function() {
    updateNavActive(); // 不再需要传递参数
    // ... 其他初始化代码
});

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // 这里可以添加表单验证
            
            // 模拟表单提交
            console.log('表单提交数据:', formValues);
            
            // 显示成功消息
            alert('感谢您的留言！我们会尽快与您联系。');
            
            // 重置表单
            contactForm.reset();
        });
    }
}

function setupHomePage() {
    const actionBtn = document.getElementById('actionBtn');
    const messageBox = document.getElementById('messageBox');
    
    if (actionBtn && messageBox) {
        actionBtn.addEventListener('click', function() {
            if (actionBtn.textContent === '点击我') {
                actionBtn.textContent = '已点击!';
            } else {
                actionBtn.textContent = '点击我';
            }
            
            messageBox.textContent = '按钮已被点击! ' + new Date().toLocaleTimeString();
            messageBox.style.backgroundColor = '#e8f8f5';
            
            setTimeout(function() {
                messageBox.style.backgroundColor = 'transparent';
            }, 3000);
        });
    }
}



