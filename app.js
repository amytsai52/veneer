document.addEventListener('DOMContentLoaded', () => {
    // Navigation switching
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const activeSectionTitle = document.getElementById('active-section-title');
    const activeSectionDesc = document.getElementById('active-section-desc');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');

            // Deactivate all nav items & sections
            navItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Activate target nav item & section
            item.classList.add('active');
            const targetSection = document.getElementById(targetTab);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Update Header Information
            const tabName = item.querySelector('span').innerText;
            activeSectionTitle.innerText = tabName;
            
            switch (targetTab) {
                case 'materials':
                    activeSectionDesc.innerText = '貼片主要材料特性、強度及臨床建議對比';
                    break;
                case 'design':
                    activeSectionDesc.innerText = '切端邊緣設計與鄰接面切削標準';
                    break;
                case 'seating':
                    activeSectionDesc.innerText = '嚴格橡皮障隔離與陶瓷/牙體雙端表面處理技術';
                    break;
                case 'commercial':
                    activeSectionDesc.innerText = '市售六大頂尖品牌樹脂水泥評介與臨床使用技巧';
                    break;
                case 'shade':
                    activeSectionDesc.innerText = '三明治光學疊加效應與試戴糊劑（Try-in Paste）選色邏輯';
                    break;
                case 'dsd':
                    activeSectionDesc.innerText = '面部導向的微笑美學分析與 2D 到 3D 數位設計流程';
                    break;
                default:
                    activeSectionDesc.innerText = '前牙貼片美學與臨床技術指引';
            }

            // Scroll main content to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Simple Search Functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            // Restore everything
            document.querySelectorAll('.rich-text, .card, .step-card, .table-container').forEach(el => {
                el.style.opacity = '1';
                el.style.display = '';
            });
            return;
        }

        // Highlight matching elements within the active section
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            const searchableElements = activeSection.querySelectorAll('.card, .step-card, p, li, tr');
            searchableElements.forEach(el => {
                const text = el.innerText.toLowerCase();
                if (text.includes(query)) {
                    el.style.opacity = '1';
                    el.style.border = '1px solid rgba(0, 242, 254, 0.4)';
                    el.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.15)';
                } else {
                    el.style.opacity = '0.3';
                    el.style.border = '';
                    el.style.boxShadow = '';
                }
            });
        }
    });
});
