// 智能客服功能
class ChatbotWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [];

        // 新增一個 responses 物件，key 是關鍵字，value 是回答
        this.responses = {
            '勞工':`👷 <strong>勞工服務專區</strong>
            請選擇您需要的服務：
            <div class="option-buttons">
            <button class="option-btn" data-option="就業">💼 就業服務</button>
            <button class="option-btn" data-option="失業">📋 失業服務</button>
            <button class="option-btn" data-option="職業訓練">🎓 職業訓練</button>
            </div>`,

            '就業':`💼 <strong>就業服務</strong>
            請選擇您的年齡層：
            <div class="option-buttons">
            <button class="option-btn" data-option="青年就業">👨‍🎓 青年就業 (30歲以下)</button>
            <button class="option-btn" data-option="中高齡就業">👴 中高齡就業 (45歲以上)</button>
            <button class="option-btn" data-option="全齡就業">👥 全齡就業</button>
            </div>`,

            '青年就業':`👨‍🎓 <strong>青年就業服務 (30歲以下)</strong>
            請選擇您需要的青年就業服務：
            <div class="option-buttons">
            <button class="option-btn" data-option="青年工讀與實習">💼 青年工讀與實習</button>
            <button class="option-btn" data-option="產學合作訓練">🎓 產學合作訓練 (15-29歲)</button>
            <button class="option-btn" data-option="青年職得好評">⭐ 青年職得好評 (15-29歲)</button>
            <button class="option-btn" data-option="青年跨域就業津貼">🌍 青年跨域就業津貼 (18-29歲)</button>
            <button class="option-btn" data-option="青年安薪讚就業大滿貫">🏆 青年安薪讚就業大滿貫 (30歲以下)</button>
            </div>`,

            '青年工讀與實習':`💼 <strong>青年工讀與實習</strong>
            請選擇您需要的工讀類型：
            <div class="option-buttons">
            <button class="option-btn" data-option="公部門工讀">🏛️ 公部門工讀</button>
            <button class="option-btn" data-option="私部門工讀">🏢 私部門工讀</button>
            </div>`,

            '公部門工讀':`🏛️ <strong>大專青年學生公部門暑期工讀</strong><br>
            為培養本市青年就業技能及面對職場應有態度，建立正確就業觀念，並結合本市智慧桃園政策，於工讀期間培養青年數位能力，藉由公部門短期就業計畫體驗職場學習與探索，提升職涯發展競爭力。<br>
            <strong>報名資格：</strong>本人設籍桃園市並且現就讀國內各大專校院之在學學生。<br>
            <a href="https://oes.tycg.gov.tw/News.aspx?n=8413&sms=12487" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往公部門工讀資訊</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：就業促進課03-3322101分機8017
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '私部門工讀':`🏢 <strong>培養數位新世代職場實習補助</strong><br>
            桃園『有頭鹿』職能訓練場」為培育企業所需人才，使學子及早認識自我職涯適性，促進青年順利與就業市場接軌，同時提供在學青年良好的實習環境與機會，爰鼓勵桃園市青年學生利用暑假期間至產業職場實習。<br>
            希冀藉由產官學三方合作，在「做中學、學中做」之實際行動中，充分結合學校課程、本計畫專屬線上及實體課程與產業界實務技能，協助青年學生從工作中建立正確的工作習慣及價值觀，以為未來正式踏入職場作充分準備，並提升青年整體就業力與勞參率。<br>
            <strong>獎勵對象及資格：</strong>桃園市轄區內之事業單位並成功媒合設籍桃園市或於桃園市就讀高中職、大專院校之在學實習工讀生。<br>
            <a href="https://oes.tycg.gov.tw/News.aspx?n=8414&sms=12488" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往私部門實習資訊</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

            '產學合作訓練':`🎓 <strong>產學合作訓練 (15-29歲)</strong><br>
            結合學校學制、職業訓練與企業資源辦理產學訓合作訓練，規劃符合產業需求之專班課程，以強化青年就業技能，培育產業所需人才。<br>
            <strong>適用對象：</strong>15歲至29歲以下之國中、高中(職)及大專畢業生。<br>
            <a href="https://ttms.etraining.gov.tw/eYVTR/" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往青年職訓資源網</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '青年職得好評':`⭐ <strong>青年職得好評 (15-29歲)</strong><br>
            協助失業青年釐清職涯發展方向、提升求職技巧，並運用工作卡（職涯履歷表）展現個人就業優勢，以解決青年尋職困難問題。<br>
            <strong></strong>15至29歲、未就學未就業且連續失業6個月以上之本國籍青年。<br>
            <a href="https://www.wda.gov.tw/News_Content.aspx?n=67&s=8070" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往青年職得好評計畫</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：03-3322101
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '青年跨域就業津貼':`🌍 <strong>青年跨域就業津貼 (18-29歲)</strong><br>
            為鼓勵剛畢業之初次尋職青年，擴大尋職範圍至外地工作，並降低跨地區就業障礙。<br>
            <strong>適用對象：</strong>年滿18歲至29歲，未在學有就業意願且初次跨域尋職之本國籍青年。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980783" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往青年跨域就業津貼表單下載</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '青年安薪讚就業大滿貫':`🏆 <strong>青年安薪讚就業大滿貫 (30歲以下)</strong><br>
            為協助設籍桃園市未滿30歲高中職以上畢業之待業青年（以下簡稱待業青年）就業，並鼓勵民營事業單位、團體或私立學校（以下簡稱僱用單位）提供工作機會，藉由就業獎勵讓青年穩定就業，同時協助僱用單位改善人力招募困境。<br>
            <strong>補助對象及資格：</strong>填寫本方案參與意願書當日，未參加勞工保險，且未滿30歲，經教育單位認可之國內外高中（職）以上學校畢業，並經本處評估核可後，具有工作意願之桃園市籍青年。並且僱用單位其提供之實際工作地必須於桃園市境內，所提供之全時職缺且每月正常工時之工資達新臺幣3萬2,000元以上(114年)屬1年（含）以下之定期契約。<br>
            <a href"https://oes.tycg.gov.tw/cp.aspx?n=8425" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往青年安薪讚就業大滿貫</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

            '中高齡就業':`👴 <strong>中高齡就業服務 (45歲以上)</strong>
            請選擇您需要的中高齡就業服務：
            <div class="option-buttons">
            <button class="option-btn" data-option="55Plus壯世代獎勵促進措施－壯世代就業獎勵">🏆 55Plus壯世代獎勵促進措施－壯世代就業獎勵 (45歲以上)</button>
            <button class="option-btn" data-option="推動職務再設計服務">🔧 推動職務再設計服務 (45歲以上)</button>
            <button class="option-btn" data-option="中高齡及高齡勞動力再運用獎勵">💪 中高齡及高齡勞動力再運用獎勵 (50歲以上)</button>
            </div>`,

            '55Plus壯世代獎勵促進措施－壯世代就業獎勵':`🏆 <strong>55Plus壯世代獎勵促進措施－壯世代就業獎勵 (45歲以上)</strong><br>
            為提高壯世代勞工重返職場意願，經公立就業服務機構就業諮詢，並推介至用人單位從事相關工作，於受僱期間即可向公立就業服務機構申請核發就業獎勵。<br>
            <strong>適用對象：</strong>離開職場連續達3個月以上並年滿45歲以上依法退休者、年滿55歲以上中高齡者及高齡者。<br>
            <a href="https://oes.tycg.gov.tw/cp.aspx?n=20789" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往55Plus壯世代獎勵促進措施－壯世代就業獎勵</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '推動職務再設計服務':`🔧 <strong>推動職務再設計服務 (45歲以上)</strong><br>
            促使中高齡及高齡者排除工作障礙，以提升工作效能促進就業，所進行改善工作設備及工作條件，提供就業所需輔具及調整工作方法之措施，俾利排除中高齡及高齡者因老化過程所致身體與心智能力下降之工作障礙，增進其工作效能，拓展就業機會。<br>
            <strong>適用對象：</strong>中高齡（年滿45歲至65歲）及高齡勞工（年逾65歲以上）。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980777" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往推動職務再設計服務計畫表單下載</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '中高齡及高齡勞動力再運用獎勵':`💪 <strong>中高齡及高齡勞動力再運用獎勵 (50歲以上)</strong><br>
            為提升本市退休勞工就業意願，並延緩勞工退離職場年齡，藉由就業獎勵鼓勵退休勞工重返就業市場，以活化現有人力資源，促進退休勞工再就業。<br>
            <strong>獎勵對象：</strong>設籍本市並年滿50歲之勞工，於填寫本計畫參與意願書當日，未有參加就業保險、勞工保險或勞工職業災害保險紀錄者。<br>
            <a href="https://keepworking.tycg.gov.tw/index.aspx?openExternalBrowser=1" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往桃園市中高齡及高齡勞動力再運用獎勵系統</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：03-3322101
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

            '全齡就業':`👥 <strong>全齡就業服務</strong>
            請選擇您需要的全齡就業服務：
            <div class="option-buttons">
            <button class="option-btn" data-option="最新職缺訊息">📋 最新職缺訊息</button>
            <button class="option-btn" data-option="最新徵才活動">🎯 最新徵才活動</button>
            <button class="option-btn" data-option="職涯諮詢">💼 職涯諮詢</button>
            <button class="option-btn" data-option="就業促進研習">📚 就業促進研習</button>
            <button class="option-btn" data-option="職場學習再適應">🔄 職場學習再適應</button>
            <button class="option-btn" data-option="婦女再就業">👩 婦女再就業</button>
            <button class="option-btn" data-option="跨域就業津貼">🌍 跨域就業津貼</button>
            <button class="option-btn" data-option="照顧服務員專班訓練">👨‍⚕️ 照顧服務員專班訓練 (16歲以上)</button>
            <button class="option-btn" data-option="照顧服務員自訓自用">🏥 照顧服務員自訓自用 (16歲以上)</button>
            <button class="option-btn" data-option="照顧服務員就業獎勵">🏆 照顧服務員就業獎勵</button>
            </div>`,

            '最新職缺訊息':`📋 <strong>最新職缺訊息</strong><br>
            桃園市政府就業職訓服務處整合「台灣就業通」的職缺資訊及「Google地圖」功能，開發「桃園市工作職缺地圖」網站，以職缺地圖方式，讓職缺位置及資訊一目了然，提供求職民眾另一個快速搜尋工作職缺的管道。<br>
            <a href="https://jobmap.tycg.gov.tw/job-map.aspx?openExternalBrowser=1" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往桃園市工作職缺地圖</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：就業促進課03-3322101分機8017
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '最新徵才活動':`🎯 <strong>最新徵才活動</strong><br>
            桃園市政府就業職訓服務處整合「台灣就業通」的職缺資訊及「Google地圖」功能，開發「桃園市工作職缺地圖」網站，以職缺地圖方式，讓職缺位置及資訊一目了然，提供求職民眾另一個快速搜尋工作職缺的管道。<br>
            「桃園市工作職缺地圖」除職缺搜尋功能外，更將職業訓練、就促課程、現場徵才活動等資源訊息一併規劃整合於地圖中，提供桃園市民更便利、更完整的就業服務。<br>
            <a href="https://jobmap.tycg.gov.tw/event.aspx?openExternalBrowser=1" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往桃園市徵才活動查詢</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：就業促進課03-3322101分機8017
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '職涯諮詢':`💼 <strong>職涯諮詢</strong><br>
            針對即將步入職場的青年、欲轉職之社會人士及二度就業民眾，提供職業適性診斷測驗，由專業的職涯諮詢輔導人員，進行評量分析並提供輔導服務，協助求職者瞭解個人特質與產業所需人才須具備能力之相同或相異處，以釐清就業方向、規劃職涯歷程，做好就業之準備；另依求職者個別需求，進行預約制一對一深度諮詢服務，透過深入及詳細的面談，了解求職者遭遇之問題及困境、選擇及適應，提出解決方式。<br>
            <a href="https://resumepass.tycg.gov.tw/" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往預約報名網址</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：就業促進課03-3322101分機8017
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '就業促進研習':`📚 <strong>就業促進研習</strong><br>
            適性就業輔導促進就業計畫<br>
            <strong>參與對象：</strong>欲求職、轉職、對課程有興趣之民眾。<br>
            <a href="https://oes.tycg.gov.tw/News.aspx?n=8447&sms=12499" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往就業促進研習網址</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

            '職場學習再適應':`🔄 <strong>職場學習再適應</strong><br>
            透過事業單位或團體，提供職場學習及再適應之機會，協助弱勢者就業準備及就業適應，使其重返職場。<br>
            <strong>適用對象：</strong>符合計畫各款失業對象，如獨力負擔家計者、中高齡者、高齡者、身心障礙者、原住民、低收入戶或中低收入戶中有工作能力者、長期失業者、二度就業婦女、家庭暴力及性侵害被害人、更生受保護人、15歲以上未滿18歲之未就學未就業少年、新住民、犯罪被害人、人口販運被害人、施用毒品者、或其他經公立就業服務機構評估認定需要協助者。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980778" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往職場學習及再適應計畫表單下載</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '婦女再就業':`👩 <strong>婦女再就業</strong><br>
            根據衛福部調查，許多女性因結婚、生育或照顧家庭而暫時離開職場，尤其隨著年齡增加，重返工作的時間也會拉長。隨著少子化與高齡化的衝擊，加上彈性工時與零工經濟的興起，企業人力需求出現缺口。為了協助離開職場半年以上的婦女順利再就業，政府不僅擴大補助對象，也推動友善職場環境，鼓勵企業配合調整工時，並透過獎勵措施與訓練資源，讓更多女性順利重返工作舞台。<br>
            <strong>適用對象：</strong>因家庭因素退出勞動市場180日以上之婦女及雇主僱用婦女或請領雇主工時調整及期間，為就業保險投保單位之民營事業單位、團體或私立學校，並向公立就業服務機構辦理求才登記者。<br>
            <a href="https://oes.tycg.gov.tw/cp.aspx?n=15529" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往婦女再就業計畫</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：03-3322101
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '跨域就業津貼':`🌍 <strong>跨域就業津貼</strong><br>
            為鼓勵失業勞工至外地就業，以儘速重返勞動市場。<br>
            <strong>適用對象：</strong>失業期間連續達3個月以上之失業被保險人或非自願性離職之失業被保險人。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980781" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往跨域就業津貼表單下載</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '照顧服務員專班訓練':`👨‍⚕️ <strong>照顧服務員專班訓練 (16歲以上)</strong><br>
            自107年起配合中央長照政策實施，辦理照顧服務員訓練專班計畫。<br>
            <strong>適用對象：</strong>為年滿16歲以上之失業者、初次就業待業者或具就業保險、勞工保險、農民健康保險被保險人身分之在職勞工。<br>
            <a href="https://oes.tycg.gov.tw/cp.aspx?n=8466" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往照顧服務員專班訓練網址</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '照顧服務員自訓自用':`🏥 <strong>照顧服務員自訓自用 (16歲以上)</strong><br>
            為提升勞工之照顧服務專業技能，協助其投入照顧服務工作，並落實照顧服務員用人單位訓用合一，鼓勵其自訓自用，特辦理此計畫。<br>
            <strong>適用對象：</strong>年滿16歲以上之失業者，初次就業待業者或具就業保險、勞工保險、農民健康保險被保險人身分之在職勞工。<br>
            <a href="https://oes.tycg.gov.tw/cp.aspx?n=8467" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往照顧服務員自訓自用網址</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '照顧服務員就業獎勵':`🏆 <strong>照顧服務員就業獎勵</strong><br>
            目的為紓解照顧服務業人力需求，並鼓勵失業勞工穩定就業。<br>
            <strong>適用對象：</strong>勞工向公立就業服務機構辦理「求職登記」並符合失業期間連續達30日以上或非自願離職，並應具備下列資格之一：領有照顧服務員訓練結業證明書、照顧服務員職類技術士證、高中(職)以上學校護理、照顧相關科、系、組、學位學程畢業或完成經衛生福利部公告之照顧服務員修業課程，並取得修業證書。並且雇主符合條件之照顧服務單位，檢附依法核准辦理照顧服務的有效證明文件。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980795" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往照顧服務員就業獎勵表單下載</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

            '失業':`📋 <strong>失業服務</strong>
            請選擇您需要的失業服務：
            <div class="option-buttons">
            <button class="option-btn" data-option="失業給付">💰 失業給付</button>
            <button class="option-btn" data-option="臨時工作津貼">💼 臨時工作津貼</button>
            <button class="option-btn" data-option="缺工就業獎勵">🏆 缺工就業獎勵</button>
            </div>`,
                    
            '失業給付':`💰 <strong>失業給付</strong><br>
            勞工於非自願離職後，檢附離職或定期契約證明文件、國民身分證及存摺之正、影本，向本處桃園就業中心(地址:桃園區縣府路59號，電話:03-3333005)或中壢就業中心(地址:中壢區新興路182號，電話:03-4681106)辦理求職登記、申請失業認定及接受就業諮詢。如未能於求職登記之日起14日內推介就業或安排職業訓練，將於翌日完成失業認定並轉請勞工保險局核發失業給付。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980782" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往失業給付相關申請表單</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：03-3322101
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '臨時工作津貼':`💼 <strong>臨時工作津貼</strong><br>
            提供特定對象失業者短期之就業安置，協助提升職場環境適應能力以即早返回一般就業市場。<br>
            <strong>適用對象：</strong>非自願性離職者、特定對象失業者、高齡失業者、就保失業被保險人、新住民失業者。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980784" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往臨時工作津貼表單下載</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '缺工就業獎勵':`🏆 <strong>缺工就業獎勵</strong><br>
            為紓解特定行業人力需求，並鼓勵失業勞工穩定就業。<br>
            <strong>適用對象：<strong>勞工失業期間連續達30日以上或非自願離職或經公立就業服務機構評估。並且雇主辦理求才登記，求才薪資須達勞動部依就業服務法第47條規定，公告之合理勞動條件薪資基準以上。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980794" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往缺工就業獎勵表單下載</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：認定給付課03-3322101分機8015
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

            '職業訓練':`🎓 <strong>職業訓練</strong>
            請選擇您需要的職業訓練服務：
            <div class="option-buttons">
            <button class="option-btn" data-option="職訓課程查詢">📋 職訓課程查詢</button>
            <button class="option-btn" data-option="職業訓練機構資源">🏢 職業訓練機構資源</button>
            <button class="option-btn" data-option="參訓對象負擔費用及身分查驗作業">💰 參訓對象負擔費用及身分查驗作業</button>
            <button class="option-btn" data-option="學員權益保障">🛡️ 學員權益保障</button>
            <button class="option-btn" data-option="技能檢定服務">🏅 技能檢定服務</button>
            <button class="option-btn" data-option="訓練單位評鑑">⭐ 訓練單位評鑑</button>
            <button class="option-btn" data-option="學員職業訓練生活津貼申請相關規定">👥 學員職業訓練生活津貼申請相關規定 (15-65歲)</button>
            </div>`,

            '職訓課程查詢':`📋 <strong>職訓課程查詢</strong><br>
            <a href="https://oes.tycg.gov.tw/News.aspx?n=8417&sms=12490" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往職訓課程查詢</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '職業訓練機構資源':`🏢 <strong>職業訓練機構資源</strong><br>
            職業訓練為就業安全體系中重要的環節之一，為加強辦理職業訓練，協助國民充分就業，勞動部亦鼓勵設立職業訓練機構。<br>
            <a href="https://www.wda.gov.tw/default.aspx" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往勞動部勞動力發展署</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：03-3322101
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '參訓對象負擔費用及身分查驗作業':`💰 <strong>參訓對象負擔費用及身分查驗作業</strong><br>
            <strong>可免費參訓的人</strong><br>
            如果你是因失業而需要訓練，且符合像是非自願離職、獨力負擔家計、中高齡、身心障礙、原住民、低／中低收入戶、長期失業、二度就業婦女、家庭暴力或性侵害被害人、新住民、無戶籍／無國籍、受重大災害、受貿易自由化影響、15–18 歲未就學未就業少年、或經社工評估確有經濟困難等身份之一，就可以向訓練單位備齊指定證明文件，申請免繳自行負擔費用。若你在工會、農會或漁會也有加保，可用切結書證明無工作，仍可以失業者身份免費參訓。<br>
            <strong>需負擔20%訓練費的人</strong><br>
            若不屬於上述特定身份（也就是一般失業者），或是雖在工會/農會/漁會投保但不符合免付條件，參訓時需負擔20% 的個人訓練費用。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8418&s=869095" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往免費參訓對象及資格證明文件</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '學員權益保障':`🛡️ <strong>學員權益保障</strong><br>
            <strong>訓練單位應將學員應有權益全部告知。</strong><br>
            <strong>勞工保險：</strong><br>
            訓練單位應於開（參）訓當日為學員投保訓字號學員勞工保險（不含就業保險），並於結（退）訓當天辦理勞工保險之退保。<br>
            <strong>上課規定：</strong><br>
            學員應遵守上課相關規定，不遲到、不早退，確實填寫「上課學員簽到（退）表」，簽名字跡應力求工整，並佩帶學員識別證或相關證明文件以備查驗，絕對不能有冒名頂替情況的發生。<br>
            <strong>實習成品：</strong><br>
            學員於訓練期間之實習成品為食材等消耗性物品，無法保存者，或為專題製作、設計之程式軟體、實體成品等，可以由訓練單位轉發製作之學員保管，必要時，經學員同意後得擇優留存，供市政府或訓練單位教學示範與成效評鑑及成果展示之用。<br>
            <strong>就業輔導：</strong><br>
            失業者職業訓練係屬就業導向之訓練措施，輔導學員就業為訓練單位服務事項之一。<br>
            <strong>結案報告：</strong><br>
            各訓練班次結訓後130日內，訓練單位應將結案報告(含活動內容與就業成果)送交本處，其所送就業事實本處將依比率進行查核，學員應配合本處及本處委託訪查單位辦理之電話或實地查核作業。<br>
            <strong>違規處理：</strong><br>
            學員如有以偽造文書或不實資料參加訓練等情事，將以撤銷參訓資格或退訓處理。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8418&s=869098" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往學員權益保障</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '技能檢定服務':`🏅 <strong>技能檢定服務</strong><br>
            技能檢定是近代工商業發展的動力之一，由於我國產業結構已朝向高科技技術發展，各行各業技術日益專業化邁向職業證照制度將是必然的趨勢。我國為提昇勞工技能水準促進社經發展，於民國61年9月發布「技術士技能檢定及發證辦法」，並於62年7月制訂定第一種技能檢定規範「冷凍空調裝修技能檢定規範」，至今已有227項技能檢定相關規範。<br>
            <a href="https://skill.tcte.edu.tw/notice.php" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往全國技術士技能檢定-報名及學科測驗試務資訊網站</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：03-3322101
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '訓練單位評鑑':`⭐ <strong>訓練單位評鑑</strong><br>
            為了解承訓單位訓練品質與績效，建構效能管控機制，提昇訓練品質及學習成果，特辦理評鑑作業，以健全職業訓練單位運作與管理。<br>
            <strong>考核對象：</strong>以辦理前一年度照顧服務員職前專班訓練之承訓單位。<br>
            <srrong>考核時間：</strong>預定每年度8至9月辦理。<br>
            <a href="https://oes.tycg.gov.tw/cp.aspx?n=8420" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往訓練單位評鑑</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
            '學員職業訓練生活津貼申請相關規定':`👥 <strong>學員職業訓練生活津貼申請相關規定 (15-65歲)</strong><br>
            <strong>被保險人非自願離職者：</strong>年滿15歲以上，65歲以下受僱本國籍勞工（被保險人）非自願離職，具有工作能力及繼續工作意願，向公立就業服務機構辦理求職登記，經公立就業服務機構安排「全日制」職業訓練。<br>
            具有被保險人非自願離職者經各公立就業服務機構職業訓練諮詢推介參訓，持該單位開立之「就業保險職業訓練生活津貼給付申請書暨給付收據」向訓練單位報到並提出申請；經勞保局審核通過者，將按月直接撥款至申請人帳戶。中途離退訓者，勞保局將自離退訓之日停止發放。<br>
            <strong>符合就業服務法第24條第1項所列之特定對象失業者：</strong>獨力負擔家計者、中高齡者、身心障礙者、原住民、低收入戶或中低收入戶中有工作能力者、長期失業者、二度就業婦女、家庭暴力或性侵害被害人、更生受保護人、新住民、15歲以上未滿18歲有就業需求之未就學未就業少年、高齡者。<br>
            訓練單位於開訓日起15日之次日起算2個工作日內，檢送參訓學員申請文件，經本處審查並轉送勞動部勞動力發展署桃竹苗分署審核通過後核撥經費至訓練單位，由訓練單位按期撥付至申請人帳戶。<br>
            <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8418&s=869096" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往學員職業訓練生活津貼申請相關規定</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：職訓推動課03-3322101分機8016
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

            '雇主':`💼 <strong>雇主服務專區</strong>
            請選擇您要雇傭的對象：
            <div class="option-buttons">
            <button class="option-btn" data-option="雇傭本國人">👨‍💼 雇傭本國人</button>
            <button class="option-btn" data-option="雇傭外國人">🌍 雇傭外國人</button>
            </div>`,

            '雇傭本國人':`👨‍💼 <strong>雇傭本國人服務專區</strong>
            請選擇您需要的雇傭本國人服務：
            <div class="option-buttons">
            <button class="option-btn" data-option="資遣通報">📢 資遣通報</button>
            <button class="option-btn" data-option="雇傭獎助津貼">💰 雇傭獎助津貼</button>
            <button class="option-btn" data-option="婦女再就業">👩 婦女再就業</button>
            <button class="option-btn" data-option="雇主聘僱本國籍照顧服務員補助">👨‍⚕️ 雇主聘僱本國籍照顧服務員補助</button>
            <button class="option-btn" data-option="55Plus壯世代獎勵促進措施－職場支持輔導補助">🏆 55Plus壯世代獎勵促進措施－職場支持輔導補助 (45歲以上)</button>
            <button class="option-btn" data-option="繼續雇傭高齡者補助">👴 繼續雇傭高齡者補助 (65歲以上)</button>
            </div>`,

            '資遣通報':`📢 <strong>資遣通報</strong><br>
            係為關懷及照顧被資遣員工，提供職訓相關訊息，輔導被資遣員工早日重返職場，維持社會的穩定及促進經濟發展，請雇主必須依法辦理資遣通報。<br>
            <strong>適用對象：</strong>勞動基準法第11條各款、第13條但書、第20條規定情事之一而離職者。<br>
            <a href="https://layoff.ejob.gov.tw/" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往資遣通報系統</a><br>
            330066桃園市桃園區民生路650號2樓
            專線：就業安全課03-3322101分機8014
            服務時間：週一至週五 8:00-12:00、13:00-17:00`,

 
           '雇傭獎助津貼':`💰 <strong>雇傭獎助津貼</strong><br>
           提升雇主僱用意願並協助弱勢失業者穩定就業。<br>
           <strong>適用對象：</strong>雇主僱用下列經公立就業服務機構或受託單位就業諮詢無法推介就業並發給僱用獎助推介卡之失業勞工連續滿30日，發給雇主僱用獎助，最高補助12個月。<br>
           <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980780" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往僱用獎助津貼表單下載</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：認定給付課03-3322101分機8015
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '雇主聘僱本國籍照顧服務員補助':`👨‍⚕️ <strong>雇主聘僱本國籍照顧服務員補助</strong><br>
           為維護本國人就業權益，鼓勵雇主聘僱本國籍照顧服務員，依據就業服務法第23條規定訂定「雇主聘僱本國籍照顧服務員補助辦法」。<br>
           <strong>適用對象：</strong>符合外國人從事就業服務法第46條第1項第8款至第11款工作資格及審查標準之雇主。<br>
           <a href="https://oes.tycg.gov.tw/News_Content.aspx?Create=1&n=8473&state=1C5D152DDF4F3ED0&s=980779&ccms_cs=1&sms=12502" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往雇主聘僱本國籍照顧服務員補助表單下載</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：認定給付課03-3322101分機8015
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '55Plus壯世代獎勵促進措施－職場支持輔導補助':`🏆 <strong>55Plus壯世代獎勵促進措施－職場支持輔導補助 (45歲以上)</strong><br>
           為鼓勵雇主提供壯世代勞工友善協助措施，提供職場支持輔導費補助，引導雇主優化職場環境，協助穩定就業職場。<br>
           <strong>申請條件：</strong>就業保險投保單位之民營事業單位、依人民團體法或其他法令設立之團體(不含政治團體及政黨)、私立學校<br>
           <a href="https://oes.tycg.gov.tw/cp.aspx?n=20790" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往職場支持輔導補助</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：認定給付課03-3322101分機8015
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '繼續雇傭高齡者補助':`👴 <strong>繼續雇傭高齡者補助 (65歲以上)</strong><br>
           鼓勵雇主繼續僱用屆齡65歲員工，並給予補助。<br>
           <strong>適用對象：</strong>僱用屆齡65歲高齡勞工之雇主。<br>
           <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980834" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往繼續僱用高齡者補助計畫申請表單下載</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：認定給付課03-3322101分機8015
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,

           '雇傭外國人':`🌍 <strong>雇傭外國人服務專區</strong>
           請選擇您需要的雇傭外國人服務：
           <div class="option-buttons">
           <button class="option-btn" data-option="求才業務">📋 求才業務</button>
           <button class="option-btn" data-option="雇主聘僱移工前辦理國內求才預約">📅 雇主聘僱移工前辦理國內求才預約</button>
           <button class="option-btn" data-option="雇主聘前講習">🎓 雇主聘前講習</button>
           <button class="option-btn" data-option="承接業務">🔄 承接業務</button>
           <button class="option-btn" data-option="領件專區">📦 領件專區</button>
           <button class="option-btn" data-option="轉出業務">📤 轉出業務</button>
           </div>`,

           '求才業務':`📋 <strong>求才業務</strong><br>
           雇主申請外國人從事就業服務法第46條第1項第8款至第11款工作前，應備妥各項求才類別之應備文件，向工作場所所在地之公立就業服務機構辦理求才登記，經資料審核、就業機會公佈及國內人才推介等流程後，備齊相關文件向就業中心申請求才證明書，並可持該求才證明書向勞動部申請核發招募許可或至就業中心申請辦理外國人之接續聘僱登記。<br>
           <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980830" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往求才業務</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：就業促進課03-3322101分機8017
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '雇主聘僱移工前辦理國內求才預約':`📅 <strong>雇主聘僱移工前辦理國內求才預約</strong><br>
           <a href="https://fw.wda.gov.tw/wda-employer/home/recruit-news" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往雇主聘僱移工前辦理國內招募求才預約專區連結</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：03-3322101
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '雇主聘前講習':`🎓 <strong>雇主聘前講習</strong><br>
           <a href="https://fw.wda.gov.tw/employer/eplyr/" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往雇主聘前講習專區</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：03-3322101
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '承接業務':`🔄 <strong>承接業務</strong><br>
           <strong>申請接續聘僱外國人所需文件：</strong>申請書、申請人或公司負責人之身分證明文件、申請月前2個月往前推算1年之僱用勞工（含外國人）保險投保人數明細表正本、符合接續聘僱外國人資格之證明文件正本、求才證明書正本、外國人預定工作內容說明書、直轄市或縣（市）政府開具依聘僱許可辦法第22條第1項第5款或第44條第1項第5款規定開具之證明文件（申請日前最近90日內有效）。<br>
           <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980831" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往承接業務</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：就業促進課03-3322101分機8017
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '領件專區':`📦 <strong>領件專區</strong><br>
           <a href="https://homerun.tycg.gov.tw/search/" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往領件專區</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：03-3322101
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           '轉出業務':`📤 <strong>轉出業務</strong><br>
           <strong>申請轉換雇主或工作所需文件：</strong>外國人轉換雇主或工作申請書、外國人護照及居留證影本、外國人同意轉換雇主或工作證明書(依移工國籍填寫中外文版)、轉出外國人資料網路登記表、委託書。<br>
           <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8473&s=980832" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往轉出業務</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：就業促進課03-3322101分機8017
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,

           '外國人/新住民':`🌍 <strong>外國人/新住民服務專區</strong>
           請選擇您的身份：
           <div class="option-buttons">
           <button class="option-btn" data-option="外國人">👤 外國人</button>
           <button class="option-btn" data-option="新住民">👥 新住民</button>
           </div>`,
                    
           '外國人':`👤 <strong>外國人服務專區</strong>
           請選擇您需要的外國人服務：
           <div class="option-buttons">
           <button class="option-btn" data-option="轉出業務">📤 轉出業務</button>
           </div>`,
                    
           '新住民':`👥 <strong>新住民服務專區</strong>
           請選擇您需要的新住民服務：
           <div class="option-buttons">
           <button class="option-btn" data-option="新住民參加職業訓練期間子女托育補助">👶 新住民參加職業訓練期間子女托育補助</button>
           <button class="option-btn" data-option="職場學習再適應">🔄 職場學習再適應</button>
           <button class="option-btn" data-option="臨時工作津貼">💼 臨時工作津貼</button>
           </div>`,
                    
           '新住民參加職業訓練期間子女托育補助':`👶 <strong>新住民參加職業訓練期間子女托育補助</strong><br>
           為鼓勵新住民參加職訓課程學習就業技能，以達穩定就業之目的，爰補助新住民114年參訓期間子女托育費用，以減輕其照顧子女負擔及協助其穩定參與訓練，進而儘早成為本國有效勞動生產力，穩定就業，以提昇個人及家庭生活品質。<br>
           <strong>補助對象及資格：</strong>符合促進新住民就業補助作業要點第2點第1項第3款規定之新住民身分者、參加本處114年度受勞動部就業安定基金補助辦理之失業者職業訓練並取得結訓或完訓證書、參訓期間育有6歲(含)以下幼童並就托於合法托育機構者。<br>
           <a href="https://oes.tycg.gov.tw/News_Content.aspx?n=8418&s=1462692" target="_blank" style="color: #e67010; text-decoration: none;">🌐 前往新住民參加職業訓練期間子女托育補助計畫</a><br>
           330066桃園市桃園區民生路650號2樓
           專線：職訓推動課03-3322101分機8016
           服務時間：週一至週五 8:00-12:00、13:00-17:00`,
                    
           default:`🦌 抱歉，我沒有找到相關服務。<br>
           請選擇勞工、雇主或外國人/新住民其中一個選項。`,
        }

        this.init();
    }
    
    init() {
        this.button = document.getElementById('chatbotButton');
        this.window = document.getElementById('chatbotWindow');
        this.closeBtn = document.getElementById('chatbotClose');
        this.messagesContainer = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        this.bindEvents();
        this.loadInitialMessage();
    }
    
    bindEvents() {
        // 開啟聊天視窗
        this.button.addEventListener('click', () => {
            this.toggleChat();
        });
        
        // 關閉聊天視窗
        this.closeBtn.addEventListener('click', () => {
            this.closeChat();
        });
        
        // 發送訊息
        this.sendBtn.addEventListener('click', () => {
            this.sendMessage();
        });
        
        // 按Enter發送訊息
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // 選項按鈕點擊事件
        this.messagesContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('option-btn')) {
                const option = e.target.getAttribute('data-option');
                this.handleOptionClick(option);
            }
        });
        
        // 點擊外部關閉聊天視窗
        document.addEventListener('click', (e) => {
            if (!this.window.contains(e.target) && !this.button.contains(e.target)) {
                this.closeChat();
            }
        });
    }
    
    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }
    
    openChat() {
        this.window.classList.add('show');
        this.isOpen = true;
        this.input.focus();
        setTimeout(() => this.scrollToBottom(), 100);
        
        // 滾動到最新訊息
        setTimeout(() => {
            this.scrollToBottom();
        }, 100);
    }
    
    closeChat() {
        this.window.classList.remove('show');
        this.isOpen = false;
    }
    
    loadInitialMessage() {
        // 初始歡迎訊息已在HTML中設定
        this.scrollToBottom();
    }
    
    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;
        
        // 添加用戶訊息
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // 模擬機器人回應
        setTimeout(() => {
            this.handleBotResponse(message);
        }, 500);
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        
        // 處理訊息內容（支援HTML）
        contentDiv.innerHTML = this.formatMessage(text);
        
        messageDiv.appendChild(contentDiv);
        this.messagesContainer.appendChild(messageDiv);
        
        // 儲存訊息
        this.messages.push({
            text: text,
            sender: sender,
            timestamp: new Date()
        });
        
        this.scrollToBottom();
    }
    
    formatMessage(text) {
        // 將純文字轉換為HTML格式
        return text.replace(/\n/g, '<br>');
    }
    
    handleBotResponse(userMessage) {
        const response = this.generateResponse(userMessage);
        this.addMessage(response, 'bot');
    }
    
    // 關鍵的模糊搜尋邏輯
    generateResponse(userMessage) {
        const normalize = (str) => str.toLowerCase().replace(/[\p{P}\p{S}]/gu, "").replace(/\s+/g, "");
    const message = normalize(userMessage);

    // 先精確比對
    if (this.responses[message]) {
        return this.responses[message];
    }

    let bestMatch = null;
    let highestScore = 0;
    const messageChars = [...message];

    for (const key in this.responses) {
        const normalizedKey = normalize(key);
        const keyChars = [...normalizedKey];

        // 計算共同字數
        const commonCharsCount = keyChars.filter(char => messageChars.includes(char)).length;

        if (commonCharsCount > highestScore) {
            highestScore = commonCharsCount;
            bestMatch = key;
        }
    }

    if (highestScore > 0) {
        return this.responses[bestMatch];
    }

    return '🦌 抱歉，我沒有找到相關服務，請換個說法試試看～';
    }
    
    
    handleOptionClick(option) {
        this.addMessage(`${option}`, 'user');
    setTimeout(() => {
        const response = this.generateResponse(option);
        this.addMessage(response, 'bot');
    }, 500);
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// 初始化智能客服
document.addEventListener('DOMContentLoaded', function() {
    new ChatbotWidget();
    console.log('智能客服已載入完成');
}); 