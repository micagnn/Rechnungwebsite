// Navigation and Section Management
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
    }
    
    // Update navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNav = document.querySelector(`[onclick*="${sectionId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'invoices': 'Rechnungen',
        'customers': 'Kunden',
        'new-invoice': 'Neue Rechnung',
        'settings': 'Einstellungen'
    };
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && titles[sectionId]) {
        pageTitle.textContent = titles[sectionId];
    }
    
    // Prevent default link behavior
    event?.preventDefault();
}

// Invoice Items Management
function addItem() {
    const tbody = document.getElementById('invoice-items');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td><input type="text" placeholder="Leistungsbeschreibung" class="item-description"></td>
        <td><input type="number" value="1" min="1" class="item-quantity" onchange="calculateItemTotal(this)"></td>
        <td><input type="number" step="0.01" placeholder="0.00" class="item-price" onchange="calculateItemTotal(this)"></td>
        <td class="item-total">0,00 €</td>
        <td><button type="button" class="btn-remove" onclick="removeItem(this)"><i class="fas fa-trash"></i></button></td>
    `;
    
    tbody.appendChild(newRow);
    
    // Add event listeners to the new inputs
    const inputs = newRow.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            calculateItemTotal(this);
        });
    });
}

function removeItem(button) {
    const row = button.closest('tr');
    const tbody = document.getElementById('invoice-items');
    
    // Keep at least one row
    if (tbody.children.length > 1) {
        row.remove();
        calculateInvoiceTotal();
    } else {
        alert('Es muss mindestens eine Position vorhanden sein.');
    }
}

function calculateItemTotal(input) {
    const row = input.closest('tr');
    const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
    const price = parseFloat(row.querySelector('.item-price').value) || 0;
    const total = quantity * price;
    
    row.querySelector('.item-total').textContent = formatCurrency(total);
    
    calculateInvoiceTotal();
}

function calculateInvoiceTotal() {
    const rows = document.querySelectorAll('#invoice-items tr');
    let subtotal = 0;
    
    rows.forEach(row => {
        const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
        const price = parseFloat(row.querySelector('.item-price').value) || 0;
        subtotal += quantity * price;
    });
    
    const taxRate = 0.19; // 19% MwSt
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('tax').textContent = formatCurrency(tax);
    document.getElementById('total').textContent = formatCurrency(total);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}

// Customer Modal (placeholder)
function openCustomerModal() {
    alert('Kundenformular wird in einer zukünftigen Version implementiert.');
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to invoice form items
    const itemInputs = document.querySelectorAll('.item-quantity, .item-price');
    itemInputs.forEach(input => {
        input.addEventListener('input', function() {
            calculateItemTotal(this);
        });
    });
    
    // Form submission handler
    const invoiceForm = document.querySelector('.invoice-form');
    if (invoiceForm) {
        invoiceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const customer = document.getElementById('customer').value;
            const invoiceDate = document.getElementById('invoice-date').value;
            const invoiceNumber = document.getElementById('invoice-number').value;
            const dueDate = document.getElementById('due-date').value;
            
            if (!customer || !invoiceDate || !invoiceNumber || !dueDate) {
                alert('Bitte füllen Sie alle erforderlichen Felder aus.');
                return;
            }
            
            // Validate that at least one item has data
            const rows = document.querySelectorAll('#invoice-items tr');
            let hasValidItem = false;
            
            rows.forEach(row => {
                const description = row.querySelector('.item-description').value;
                const price = parseFloat(row.querySelector('.item-price').value) || 0;
                if (description && price > 0) {
                    hasValidItem = true;
                }
            });
            
            if (!hasValidItem) {
                alert('Bitte fügen Sie mindestens eine Position mit Beschreibung und Preis hinzu.');
                return;
            }
            
            // Success message
            alert('Rechnung erfolgreich erstellt!\n\nRechnungsnummer: ' + invoiceNumber);
            
            // Add to invoices list (in a real app, this would be saved to a database)
            showSection('invoices');
        });
    }
    
    // Set default date values
    const today = new Date().toISOString().split('T')[0];
    const invoiceDateInput = document.getElementById('invoice-date');
    if (invoiceDateInput) {
        invoiceDateInput.value = today;
    }
    
    // Set due date to 14 days from now
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);
    const dueDateInput = document.getElementById('due-date');
    if (dueDateInput) {
        dueDateInput.value = dueDate.toISOString().split('T')[0];
    }
    
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real application, this would filter the table data
            const filterType = this.textContent.trim();
            console.log('Filtering by:', filterType);
        });
    });
    
    // Add click handlers for action buttons
    document.querySelectorAll('.btn-icon').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('title');
            const row = this.closest('tr');
            const invoiceNumber = row.querySelector('td:first-child').textContent;
            
            switch(action) {
                case 'Ansehen':
                    alert(`Rechnung ${invoiceNumber} wird angezeigt.`);
                    break;
                case 'Bearbeiten':
                    alert(`Rechnung ${invoiceNumber} wird bearbeitet.`);
                    break;
                case 'Download':
                    alert(`Rechnung ${invoiceNumber} wird heruntergeladen.`);
                    break;
            }
        });
    });
    
    // Settings save button
    const settingsSaveBtn = document.querySelector('.settings-container .btn-primary');
    if (settingsSaveBtn) {
        settingsSaveBtn.addEventListener('click', function() {
            alert('Einstellungen erfolgreich gespeichert!');
        });
    }
    
    // Customer action buttons
    document.querySelectorAll('.customer-actions .btn').forEach(button => {
        button.addEventListener('click', function() {
            const customerName = this.closest('.customer-card').querySelector('h3').textContent;
            const action = this.textContent.trim();
            
            alert(`${action} für ${customerName}`);
        });
    });
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            // Get all visible table rows
            const currentSection = document.querySelector('.content-section.active');
            if (currentSection) {
                const rows = currentSection.querySelectorAll('.data-table tbody tr');
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
        });
    }
});

// Initialize calculations on page load
window.addEventListener('load', function() {
    calculateInvoiceTotal();
});
