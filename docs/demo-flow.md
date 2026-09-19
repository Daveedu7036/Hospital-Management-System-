# 🎓 Faculty Demonstration & Execution Script

Follow this step-by-step end-to-end workflow during the B.Tech project presentation to demonstrate full inter-departmental hospital functionality.

---

### 📍 Step 1 — Receptionist Dashboard
1. Log in as Receptionist (`receptionist` / `Password123!`).
2. Navigate to **Patient Management** -> Click **Register New Patient**.
   - **Name**: Rahul Verma
   - **DOB**: 1991-05-14 (Age 35)
   - **Blood Group**: O+
3. Search for Cardiology department and select available doctor **Dr. Sharma**.
4. Book an appointment slot at **10:30 AM**. System generates code `APT-1001`.

---

### 📍 Step 2 — Doctor Consultation & Record Entry
1. Log in as Doctor (`dr.sharma` / `Password123!`).
2. Open appointment roster for today -> Select **Rahul Verma (`APT-1001`)**.
3. Record Consultation:
   - **Vitals**: BP 120/80, Pulse 72, Temp 98.6°F, SpO2 99%
   - **Diagnosis**: Acute Bronchitis
   - **Prescription**: Paracetamol (500mg, 1-0-1, 5 days), Amoxicillin (500mg, 1-0-1, 7 days)
   - **Lab Test Request**: Complete Blood Count (CBC) & Chest X-Ray

---

### 📍 Step 3 — Laboratory Technician Processing
1. Log in as Lab Tech (`labtech` / `Password123!`).
2. Open **Pending Lab Requests** -> Locate request for **Rahul Verma**.
3. Update status: `SAMPLE_COLLECTED` -> `PROCESSING` -> `COMPLETED`.
4. Enter test findings (WBC count 7,500 /mcL — Normal) and attach report PDF.

---

### 📍 Step 4 — Pharmacy Dispensing & Auto-Inventory Reduction
1. Log in as Pharmacist (`pharmacist` / `Password123!`).
2. View pending prescriptions -> Select **Rahul Verma**.
3. Click **Dispense Medicines**.
4. Verify Inventory: Show that Paracetamol stock automatically decreased by 10 units and Amoxicillin stock by 14 units.

---

### 📍 Step 5 — Accountant Billing & Payment Processing
1. Log in as Accountant (`accountant` / `Password123!`).
2. Generate Invoice for patient **Rahul Verma**:
   - Consultation Fee: ₹500
   - Lab Tests (CBC + X-Ray): ₹800
   - Medicines: ₹350
   - **Total**: ₹1,650
3. Record payment of ₹1,650 (Status updates to `PAID`).
4. Generate & view PDF Invoice.

---

### 📍 Step 6 — Admin Dashboard & Security Audit Verification
1. Log in as Admin (`admin` / `Password123!`).
2. View Real-Time Analytics Dashboard:
   - Updated patient count
   - Today's appointment stats
   - Revenue charts ($1,650 added)
   - Low-stock medicine alerts
3. Open **Audit Logs**: Point out logged actions with timestamp, user ID, role, and operation (`CREATE_PATIENT`, `CREATE_MEDICAL_RECORD`, `DISPENSE_MEDICINE`, `RECEIVE_PAYMENT`).
