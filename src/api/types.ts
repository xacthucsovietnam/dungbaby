// Các Class cơ bản

export interface XTSType {
    _type: string;
  }
  
  export interface XTSCondition extends XTSType {
    property: string;
    value: any; // Không xác định trong tài liệu, để any tạm thời
    comparisonOperator?: XTSComparisonOperator;
  }
  
  export interface XTSError extends XTSType {
    description: string;
    subject?: string;
  }
  
  export interface XTSMessage extends XTSType {
    _dbId: string | null;
    _messageId: number | null;
  }
  
  export interface XTSObject extends XTSType {
    _isFullData: boolean;
    objectId: XTSObjectId;
  }
  
  export interface XTSObjectId extends XTSType {
    id: string;
    dataType?: string;
    presentation?: string | null;
    navigationRef?: string | null;
    url?: string; // Thêm từ ví dụ
  }
  
  export interface XTSObjectListItem extends XTSType {
    canHaveChildren: boolean;
    isFolder: boolean;
    object: XTSObject;
    parentId: XTSObjectId;
  }
  
  export interface XTSRecord extends XTSType {
    recordKey: XTSRecordKey;
    period?: string; // dateTime
    register?: XTSObjectId;
  }
  
  export interface XTSRecordKey extends XTSType {
    dataType?: string;
    filter: XTSRecordFilter[];
  }
  
  export interface XTSRecordFilter extends XTSType {
    // Tài liệu không mô tả chi tiết, để trống tạm thời
  }
  
  export interface XTSRecordSet extends XTSType {
    dataType: string;
    filter: XTSRecordFilter[];
    records?: XTSRecord[];
  }
  
  export interface XTSTabularSession extends XTSType {
    lineNumber: number;
  }
  
  // Request và Response cơ bản
  
  export interface XTSRequest extends XTSMessage {}
  
  export interface XTSResponse extends XTSMessage {}
  
  // Các Class mô tả Request và Response
  
  export interface XTSSignInRequest extends XTSRequest {
    deviceId?: string;
    userToken?: string;
    userName?: string;
    password?: string;
    telegramId?: string;
    zaloId?: string;
    phone?: string;
    otp?: string;
    deviceInfo?: string; // Từ ví dụ
    fullName?: string; // Từ ví dụ
  }
  
  export interface XTSSignInResponse extends XTSResponse {
    deviceId?: string | null;
    userToken?: string | null;
    userName?: string | null;
    telegramId?: string | null;
    phone?: string | null;
    zaloId?: string | null;
    user?: XTSObjectId | null;
    userProfile?: XTSObjectId | null;
    company?: XTSObjectId | null;
    employee?: XTSObjectId | null;
    customer?: XTSObjectId | null;
    externalAccount?: XTSObjectId | null;
    externalAccountId?: string | null;
    externalAccountOwner?: string | null;
    defaultValues?: { [key: string]: XTSObjectId | null };
    fileStorageURL?: string | null;
    otp?: string | null;
  }
  
  export interface XTSSignOutRequest extends XTSRequest {
    deviceId?: string;
    externalAccount?: XTSObjectId;
    user?: XTSObjectId;
  }
  
  export interface XTSSignOutResponse extends XTSResponse {
    externalAccount?: XTSObjectId | null;
    user?: XTSObjectId | null;
    customer?: XTSObjectId | null;
    defaultValues?: { [key: string]: XTSObjectId | null };
    company?: XTSObjectId | null;
  }
  
  export interface XTSUpdateUserConnectionRequest extends XTSRequest {
    // Tài liệu không mô tả chi tiết
  }
  
  export interface XTSUpdateUserConnectionResponse extends XTSResponse {
    // Tài liệu không mô tả chi tiết
  }
  
  export interface XTSConnectUserRequest extends XTSRequest {
    externalAccount?: XTSObjectId;
    customer?: XTSObjectId;
    user?: XTSObjectId;
  }
  
  export interface XTSConnectUserResponse extends XTSResponse {
    externalAccount?: XTSObjectId | null;
    customer?: XTSObjectId | null;
    user?: XTSObjectId | null;
    employee?: XTSObjectId | null;
    defaultValues?: { [key: string]: XTSObjectId | null };
  }
  
  export interface XTSGetObjectListRequest extends XTSRequest {
    dataType: string;
    columnSet?: string[];
    sortBy?: string[];
    positionFrom?: number;
    positionTo?: number;
    limit?: number;
    conditions?: XTSCondition[];
  }
  
  export interface XTSGetObjectListResponse extends XTSResponse {
    items?: XTSObjectListItem[];
  }
  
  export interface XTSGetObjectsRequest extends XTSRequest {
    objectIds?: XTSObjectId[];
    columnSet?: string[];
  }
  
  export interface XTSGetObjectsResponse extends XTSResponse {
    objects?: XTSObject[];
  }
  
  export interface XTSCreateObjectRequest extends XTSRequest {
    object: XTSObject;
    fillingValues?: { [key: string]: any };
  }
  
  export interface XTSCreateObjectResponse extends XTSResponse {
    object: XTSObject;
  }
  
  export interface XTSUpdateObjectsRequest extends XTSRequest {
    objects: XTSObject[];
  }
  
  export interface XTSUpdateObjectsResponse extends XTSResponse {
    objects?: XTSObject[];
  }
  
  export interface XTSDeleteObjectsRequest extends XTSRequest {
    objectIds: XTSObjectId[];
  }
  
  export interface XTSDeleteObjectsResponse extends XTSResponse {
    objectIds?: XTSObjectId[];
  }
  
  export interface XTSDownloadObjectListRequest extends XTSRequest {
    dataType?: string;
    prefix?: string;
  }
  
  export interface XTSDownloadObjectListResponse extends XTSResponse {
    objects?: string; // String JSON
  }
  
  export interface XTSGetRecordSetRequest extends XTSRequest {
    dataType?: string;
    filter?: XTSObject;
  }
  
  export interface XTSGetRecordSetResponse extends XTSResponse {
    recordSet?: XTSRecordSet;
  }
  
  export interface XTSUpdateRecordSetRequest extends XTSRequest {
    recordSet: XTSRecordSet;
  }
  
  export interface XTSUpdateRecordSetResponse extends XTSResponse {
    recordSet?: XTSRecordSet;
  }
  
  export interface XTSGetFilesRequest extends XTSRequest {
    files: XTSFile[];
  }
  
  export interface XTSGetFilesResponse extends XTSResponse {
    fileIds?: XTSObjectId[];
    fileOwner?: XTSObjectId;
    attributeName?: string;
  }
  
  export interface XTSUploadFileRequest extends XTSRequest {
    file?: XTSFile;
    attributeName?: string;
    binaryData?: string;
    startsWith?: string;
    copyToS3Storage?: boolean;
  }
  
  export interface XTSUploadFileResponse extends XTSResponse {
    file?: XTSFile;
  }
  
  export interface XTSDeleteFilesRequest extends XTSRequest {
    fileIds: XTSObjectId[];
  }
  
  export interface XTSDeleteFilesResponse extends XTSResponse {
    fileIds?: XTSObjectId[];
  }
  
  export interface XTSGetReportDataRequest extends XTSRequest {
    ReportType?: string;
    startDate?: string; // dateTime
    endDate?: string; // dateTime
    conditions?: XTSCondition[];
  }
  
  export interface XTSGetReportDataResponse extends XTSResponse {
    reportType?: string;
    reportData?: { [key: string]: any }; // Không xác định cụ thể
  }
  
  export interface XTSGetRelatedDocumentsRequest extends XTSRequest {
    objectId?: XTSObjectId;
  }
  
  export interface XTSGetRelatedDocumentsResponse extends XTSResponse {
    documents?: XTSRelatedDocument[];
  }
  
  export interface XTSGetPrintFormRequest extends XTSRequest {
    // Chưa phát triển
  }
  
  export interface XTSGetPrintFormResponse extends XTSResponse {
    // Chưa phát triển
  }
  
  export interface XTSGetReportRequest extends XTSRequest {
    // Chưa phát triển
  }
  
  export interface XTSGetReportResponse extends XTSResponse {
    // Chưa phát triển
  }
  
  // Các Class mô tả dữ liệu
  
  export interface XTSCart extends XTSRecord {
    date: string; // dateTime
    externalAccount: XTSObjectId;
    company: XTSObjectId;
    customer: XTSObjectId;
    pProduct: XTSObjectId;
    characteristic: XTSObjectId;
    uom: XTSObjectId;
    coefficient: number;
    price: number;
    quantity: number;
    total: number;
    vatRate: XTSObjectId;
    selected: boolean;
    picture: XTSObjectId;
  }
  
  export interface XTSCounterparty extends XTSObject {
    code: string;
    description: string;
    descriptionFull?: string | null;
    counterpartyKind?: XTSObjectId | null;
    birthDate?: string | null; // date
    comment?: string | null;
    tin?: string | null;
    invalid?: boolean;
    mainInfo?: number | null;
    picture?: XTSObjectId | null;
    customer?: boolean;
    gender?: XTSObjectId | null;
    vendor?: boolean;
    otherRelations?: boolean;
    doOperationsByContracts?: boolean;
    doOperationsByOrders?: boolean;
    doOperationsByDocuments?: boolean;
    phone?: string | null;
    email?: string | null;
    address?: string | null;
    addressValue?: string | null;
    employeeResponsible?: XTSObjectId | null;
  }
  
  export interface XTSEmployee extends XTSObject {
    description: string;
    individual: XTSObjectId;
    individ: XTSObjectId; // Có thể là lỗi trùng lặp trong tài liệu
    invalid?: boolean;
    parentCompany: XTSObjectId;
    headEmployee: XTSObjectId;
  }
  
  export interface XTSExternalAccount extends XTSObject {
    description: string;
    id: string;
    user: XTSObjectId;
    customer: XTSObjectId;
  }
  
  export interface XTSFile extends XTSObject {
    Author: XTSObjectId;
    FileOwner: XTSObjectId;
    Description?: string | null;
    CreationDate?: string | null; // dateTime
    LongDescription?: string | null;
    Size?: number | null;
    Extension?: string | null;
  }
  
  export interface XTSIndividual extends XTSObject {
    Code: string;
    Description: string;
    FullName?: string | null;
    BirthDate?: string | null; // date
    MainInfo?: string | null;
    LastName?: string | null;
    Name?: string | null;
    Gender?: XTSObjectId | null;
    MiddleName?: string | null;
    PicturesFile?: XTSObjectId | null;
  }
  
  export interface XTSOrder extends XTSObject {
    Date: string; // dateTime
    Number: string;
    Author?: XTSObjectId | null;
    Comment?: string | null;
    Company: XTSObjectId;
    Contract: XTSObjectId;
    Counterparty: XTSObjectId;
    DeliveryAddress?: string | null;
    DiscountCard: XTSObjectId;
    OperationKind: XTSObjectId;
    ShipmentDate: string; // date
    DocumentAmount: number;
    DocumentCurrency: XTSObjectId;
    EmployeeResponsible: XTSObjectId;
    OrderState: XTSObjectId;
    ShippingCost: number;
    Phone: string;
    CompletionOption?: XTSObjectId | null;
    XTSCash: number;
    XTSBankTransfer: number;
    XTSPostPayment: number;
    XTSPaymentNote?: string | null;
    Rate: number;
    Multiplicity: number;
    VATTaxation: XTSObjectId;
    XTSStatus: XTSObjectId;
  }
  
  export interface XTSOrderProductRow extends XTSTabularSession {
    Product: XTSObjectId;
    Quantity: number;
    Price: number;
    Total: number;
  }
  
  export interface XTSFileRow extends XTSTabularSession {
    File: XTSObjectId;
    FileType: string;
    FileSize: number;
  }
  
  export interface XTSProduct extends XTSObject {
    Code: string;
    Description: string;
    Category: XTSObjectId;
    Price: number;
    UOM: XTSObjectId;
  }
  
  export interface XTSProductCharacteristic extends XTSObject {
    Characteristic: XTSObjectId;
    Value: string;
  }
  
  export interface XTSProductCharacteristicRow extends XTSTabularSession {
    Characteristic: XTSObjectId;
    Value: string;
  }
  
  export interface XTSProductPriceRow extends XTSTabularSession {
    Product: XTSObjectId;
    Price: number;
    Currency: XTSObjectId;
    EffectiveDate: string; // dateTime
  }
  
  export interface XTSProductUOMRow extends XTSTabularSession {
    UOM?: XTSObjectId;
    Coefficient?: number;
  }
  
  export interface XTSProductCategory extends XTSObject {
    Description?: string | null;
    Code?: string | null;
    PicturesFile?: XTSObjectId | null;
  }
  
  export interface XTSUOMClassifier extends XTSObject {
    Description?: string | null;
    Code?: string | null;
    DescriptionFull?: string | null;
    NumberernationalAbbreviation?: string | null; // Có thể là lỗi chính tả, đúng là "InternationalAbbreviation"
    MeasuredValueType?: string | null;
  }
  
  export interface XTSUser extends XTSObject {
    Description?: string | null;
    UserName?: string | null;
    Phone?: string | null;
    Email?: string | null;
    Invalid?: boolean;
    Comment?: string | null;
  }
  
  export interface XTSUserProfile extends XTSType {
    Description?: string | null;
    FullName?: string | null;
    DateOfBirth?: string | null;
    Phone?: string | null;
    Address?: string | null;
    Email?: string | null;
  }
  
  export interface XTSSalesInvoice extends XTSObject {
    Date?: string | null; // dateTime
    Number?: string | null;
    CustomerId?: XTSObjectId | null;
    DocumentAmount?: number | null;
  }
  
  export interface XTSSalesInvoiceInventory extends XTSTabularSession {
    Products?: XTSObjectId | null;
    Quantity?: number | null;
    Price?: number | null;
  }
  
  export interface XTSSupplierInvoice extends XTSObject {
    Date?: string | null; // dateTime
    Number?: string | null;
    SupplierId?: XTSObjectId | null;
    DocumentAmount?: number | null;
  }
  
  export interface XTSSupplierInvoiceInventory extends XTSTabularSession {
    // Tài liệu không mô tả chi tiết
  }
  
  export interface XTSCashReceipt extends XTSObject {
    ReceiptId?: XTSObjectId | null;
    Amount?: number | null;
    Payer?: string | null;
    date?: string | null; // dateTime, từ ví dụ
    number?: string | null; // Từ ví dụ
    operationKind?: XTSObjectId | null; // Từ ví dụ
    company?: XTSObjectId | null; // Từ ví dụ
    counterparty?: XTSObjectId | null; // Từ ví dụ
    cashCurrency?: XTSObjectId | null; // Từ ví dụ
    documentAmount?: number | null; // Từ ví dụ
    accountingAmount?: number | null; // Từ ví dụ
    rate?: number | null; // Từ ví dụ
    multiplicity?: number | null; // Từ ví dụ
    comment?: string | null; // Từ ví dụ
    author?: XTSObjectId | null; // Từ ví dụ
    structuralUnit?: XTSObjectId | null; // Từ ví dụ
    department?: XTSObjectId | null; // Từ ví dụ
    employeeResponsible?: XTSObjectId | null; // Từ ví dụ
    cashAccount?: XTSObjectId | null; // Từ ví dụ
    cashFlowItem?: XTSObjectId | null; // Từ ví dụ
    documentBasis?: XTSObjectId | null; // Từ ví dụ
    paymentDetails?: XTSCashReceiptPaymentDetails[]; // Từ ví dụ
  }
  
  export interface XTSCashReceiptPaymentDetails extends XTSTabularSession {
    Products?: XTSObjectId | null;
    Characteristic?: XTSObjectId | null;
    MeasurementUnit?: XTSObjectId | null;
    Quantity?: number | null;
    Price?: number | null;
    Amount?: number | null;
    AmountDiscountsMarkups?: number | null;
    VATAmount?: number | null;
    VATRate?: XTSObjectId | null;
    Total?: number | null;
    _Coefficient?: number | null;
    _Price?: number | null;
    _VATRateRate?: number | null;
    _Picture?: XTSObjectId | null;
    contract?: XTSObjectId | null; // Từ ví dụ
    document?: XTSObjectId | null; // Từ ví dụ
    paymentAmount?: number | null; // Từ ví dụ
    settlementsAmount?: number | null; // Từ ví dụ
    advanceFlag?: boolean | null; // Từ ví dụ
    docOrder?: XTSObjectId | null; // Từ ví dụ
  }
  
  export interface XTSPaymentReceipt extends XTSObject {
    ReceiptId?: XTSObjectId | null;
    Payee?: string | null;
    TotalAmount?: number | null;
    date?: string | null; // dateTime, từ ví dụ
    number?: string | null; // Từ ví dụ
    operationKind?: XTSObjectId | null; // Từ ví dụ
    company?: XTSObjectId | null; // Từ ví dụ
    counterparty?: XTSObjectId | null; // Từ ví dụ
    cashCurrency?: XTSObjectId | null; // Từ ví dụ
    documentAmount?: number | null; // Từ ví dụ
    accountingAmount?: number | null; // Từ ví dụ
    rate?: number | null; // Từ ví dụ
    multiplicity?: number | null; // Từ ví dụ
    comment?: string | null; // Từ ví dụ
    author?: XTSObjectId | null; // Từ ví dụ
    bankAccount?: XTSObjectId | null; // Từ ví dụ
    cashFlowItem?: XTSObjectId | null; // Từ ví dụ
    documentBasis?: XTSObjectId | null; // Từ ví dụ
    paymentDetails?: XTSPaymentReceiptPaymentDetails[]; // Từ ví dụ
    employeeResponsible?: XTSObjectId | null; // Từ ví dụ
  }
  
  export interface XTSPaymentReceiptPaymentDetails extends XTSTabularSession {
    Contract?: XTSObjectId | null;
    Document?: XTSObjectId | null;
    PaymentAmount?: number | null;
    SettlementsAmount?: number | null;
    Rate?: number | null;
    Multiplicity?: number | null;
    AdvanceFlag?: boolean | null;
    DocOrder?: XTSObjectId | null;
  }
  
  export interface XTSStructuralUnit extends XTSObject {
    UnitId?: XTSObjectId | null;
    Name?: string | null;
    ParentUnit?: XTSObjectId | null;
  }
  
  export interface XTSRelatedDocument extends XTSType {
    DocumentId?: XTSObjectId | null;
    Name?: string | null;
    RelatedTo?: XTSObjectId | null;
  }
  
  export interface XTSCurrency extends XTSObject {
    Code?: string | null;
    Description?: string | null;
    DescriptionFull?: string | null;
    SymbolicPresentation?: string | null;
    MainCurrency?: XTSObjectId | null;
    Markup?: number | null;
  }
  
  export interface XTSCounterpartyContract extends XTSObject {
    Code?: string | null;
    Description?: string | null;
    PriceKind?: XTSObjectId | null;
    CounterpartyPriceKind?: XTSObjectId | null;
    ContractDate?: string | null; // date
    ContractNumber?: string | null;
    SettlementsCurrency?: XTSObjectId | null;
    Comment?: string | null;
    Company?: XTSObjectId | null;
    ContractKind?: XTSObjectId | null;
  }
  
  export interface XTSProductsPriceRegistration extends XTSObject {
    Date?: string | null; // dateTime
    Number?: string | null;
    Author?: XTSObjectId | null;
    Comment?: string | null;
    DocumentBasis?: XTSObjectId | null;
    Inventory?: XTSProductsPriceRegistrationInventory[];
  }
  
  export interface XTSProductsPriceRegistrationInventory extends XTSTabularSession {
    Product?: XTSObjectId | null;
    Characteristic?: XTSObjectId | null;
    MeasurementUnit?: XTSObjectId | null;
    KindOfPrice?: XTSObjectId | null;
    Price?: number | null;
    OldPrice?: number | null;
    Currency?: XTSObjectId | null;
    CurrencyOld?: XTSObjectId | null;
  }
  
  // Các Enum
  
  export enum XTSComparisonOperator {
    Equal = '=',
    NotEqual = '<>',
    GreaterThan = '>',
    LessThan = '<',
    GreaterThanOrEqual = '>=',
    LessThanOrEqual = '<=',
    Like = 'LIKE',
    In = 'IN',
    InHierarchy = 'IN HIERARCHY',
  }
  
  export enum XTSGender {
    Male = 'Male',
    Female = 'Female', // Sửa lỗi chính tả từ "Famale"
    Unknown = 'Unknown',
  }
  
  export enum XTSProductsType {
    InventoryItem = 'InventoryItem',
    Service = 'Service',
    Work = 'Work',
    Operation = 'Operation',
    WorkKind = 'WorkKind',
    GiftCertificate = 'GiftCertificate',
  }
  
  export enum XTSCounterpartyKind {
    LegalEntity = 'LegalEntity',
    IndividualEntrepreneur = 'IndividualEntrepreneur',
    Individual = 'Individual',
    StateAuthority = 'StateAuthority',
  }
  
  export enum XTSOrderCompletionOption {
    Success = 'Success',
    Canceled = 'Canceled',
  }
  
  export enum XTSVATTaxationType {
    TaxableByVAT = 'TaxableByVAT',
    NotTaxableByVAT = 'NotTaxableByVAT',
    ForExport = 'ForExport',
  }
  
  export enum XTSOperationKindsSalesOrder {
    OrderForSale = 'OrderForSale',
    OrderForProcessing = 'OrderForProcessing',
    WorkOrder = 'WorkOrder',
  }
  
  export enum XTSOperationKindsSalesInvoice {
    SaleToCustomer = 'SaleToCustomer',
    TransferForCommission = 'TransferForCommission',
    TransferToProcessing = 'TransferToProcessing',
    TransferForSafeCustody = 'TransferForSafeCustody',
    ReturnToSupplier = 'ReturnToSupplier',
    ReturnToPrincipal = 'ReturnToPrincipal',
    ReturnFromProcessing = 'ReturnFromProcessing',
    ReturnFromSafeCustody = 'ReturnFromSafeCustody',
  }
  
  export enum XTSOperationKindsSupplierInvoice {
    FromCustomer = 'FromCustomer',
    FromSupplier = 'FromSupplier',
    FromAdvanceHolder = 'FromAdvanceHolder',
    RetailIncome = 'RetailIncome',
    RetailIncomeAccrualAccounting = 'RetailIncomeAccrualAccounting',
    CurrencyPurchase = 'CurrencyPurchase',
    Other = 'Other',
    OtherSettlements = 'OtherSettlements',
    SettlementsByCredits = 'SettlementsByCredits',
    LoanReturnByEmployee = 'LoanReturnByEmployee',
    ReceiptOfCashInBank = 'ReceiptOfCashInBank',
    EntrepreneurPersonalFinances = 'EntrepreneurPersonalFinances',
    FromOurCompany = 'FromOurCompany',
    ReceiptFromCurrencySale = 'ReceiptFromCurrencySale',
  }
  
  export enum XTSOperationKindsCashReceipt {
    Warehouse = 'Warehouse',
    Retail = 'Retail',
    RetailAccrualAccounting = 'RetailAccrualAccounting',
    ShopWarehousesGroup = 'ShopWarehousesGroup',
    Department = 'Department',
  }
  
  export enum XTSOperationKindsPaymentReceipt {
    FromCustomer = 'FromCustomer',
    FromSupplier = 'FromSupplier',
    FromAdvanceHolder = 'FromAdvanceHolder',
    CurrencyPurchase = 'CurrencyPurchase',
    Other = 'Other',
    OtherSettlements = 'OtherSettlements',
    Taxes = 'Taxes',
    SettlementsByCredits = 'SettlementsByCredits',
    LoanReturnByEmployee = 'LoanReturnByEmployee',
    PaymentByCardsReceipt = 'PaymentByCardsReceipt',
    CashContribution = 'CashContribution',
    TransferFromAnotherAccount = 'TransferFromAnotherAccount',
    FromCourierCompanyMail = 'FromCourierCompanyMail',
    PaymentReceiptByCredits = 'PaymentReceiptByCredits',
    FromOurCompany = 'FromOurCompany',
    ReceiptFromCurrencySale = 'ReceiptFromCurrencySale',
  }
  
  export enum XTSStructuralUnitType {
    Warehouse = 'Warehouse',
    Retail = 'Retail',
    RetailAccrualAccounting = 'RetailAccrualAccounting',
    ShopWarehousesGroup = 'ShopWarehousesGroup',
    Department = 'Department',
  }
  
  export enum XTSContractKind {
    WithSupplier = 'WithSupplier',
    WithCustomer = 'WithCustomer',
    FromPrincipal = 'FromPrincipal',
    WithAgent = 'WithAgent',
    Other = 'Other',
  }
  
  export enum XTSOperationKindsCashPayment {
    Salary = 'Salary',
    SalaryForEmployee = 'SalaryForEmployee',
    Taxes = 'Taxes',
    ToAdvanceHolder = 'ToAdvanceHolder',
    ToCustomer = 'ToCustomer',
    ToSupplier = 'ToSupplier',
    Other = 'Other',
    TransferToCashCR = 'TransferToCashCR',
    LoanIssuanceToEmployee = 'LoanIssuanceToEmployee',
    SettlementsByCredits = 'SettlementsByCredits',
    OtherSettlements = 'OtherSettlements',
    ToExpenses = 'ToExpenses',
    CashInBank = 'CashInBank',
    EntrepreneurPersonalFinances = 'EntrepreneurPersonalFinances',
    OurCompany = 'OurCompany',
  }
  
  export enum XTSOperationKindsPaymentExpense {
    ToSupplier = 'ToSupplier',
    ToCustomer = 'ToCustomer',
    ToAdvanceHolder = 'ToAdvanceHolder',
    Salary = 'Salary',
    Taxes = 'Taxes',
    Other = 'Other',
    OtherSettlements = 'OtherSettlements',
    SettlementsByCredits = 'SettlementsByCredits',
    LoanIssuanceToEmployee = 'LoanIssuanceToEmployee',
    ReturnPaymentToPaymentCards = 'ReturnPaymentToPaymentCards',
    ToExpenses = 'ToExpenses',
    CashWithdrawal = 'CashWithdrawal',
    TransferToAnotherAccount = 'TransferToAnotherAccount',
    SalaryForEmployee = 'SalaryForEmployee',
    EntrepreneurPersonalFinances = 'EntrepreneurPersonalFinances',
    CreditSalesReturn = 'CreditSalesReturn',
    BankCommission = 'BankCommission',
    OurCompany = 'OurCompany',
  }

  export interface XTSServiceError {
    status: number;
    message: string;
    details?: any; // Thông tin lỗi bổ sung nếu có
  }