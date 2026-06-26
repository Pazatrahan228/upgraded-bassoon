export type Service = { slug:string; title:string; short:string; description:string; price:string; keywords:string[] };
export const services: Service[] = [
{slug:'aesthetic-veneers',title:'Estetické fazety',short:'Jemná cesta k přirozenému tvaru a barvě úsměvu.',description:'Fazety navrhujeme až po konzultaci, diagnostice a vysvětlení možností. Výsledek se liší podle stavu pacienta.',price:'Cena po konzultaci',keywords:['fazety Praha','estetická stomatologie']},
{slug:'digital-whitening',title:'Digitální bělení',short:'Bezpečné zesvětlení zubů navržené podle citlivosti a cíle.',description:'Bělení zubů Praha s důrazem na diagnostiku, komfort a doporučení lékaře před zahájením.',price:'Cena po konzultaci',keywords:['bělení zubů Praha']},
{slug:'implant-surgery',title:'Implantologie',short:'Plánované implantologické ošetření s jasnou komunikací.',description:'Implantologii indikujeme individuálně podle zdravotního stavu, skenu a léčebného plánu.',price:'Cena po konzultaci',keywords:['implantologie Praha']},
{slug:'modern-orthodontics',title:'Moderní ortodoncie',short:'Srovnání zubů s ohledem na estetiku, funkci a čas.',description:'Ortodoncické řešení doporučí lékař po vstupním vyšetření a diagnostice.',price:'Cena po konzultaci',keywords:['rovnátka Praha']},
{slug:'restorative-dentistry',title:'Záchovná stomatologie',short:'Pečlivé ošetření kazů a rekonstrukce přirozeného vzhledu.',description:'Šetrná záchovná stomatologie v Praze pro zdraví, funkci a přirozený úsměv.',price:'Cena po konzultaci',keywords:['stomatologie Praha']},
{slug:'first-visit',title:'První návštěva',short:'Klidná konzultace, diagnostika a srozumitelný další postup.',description:'První návštěva slouží k pochopení vašich potřeb, zdravotního stavu a možností léčby.',price:'Cena po konzultaci',keywords:['zubní klinika Praha']}
];
export const getService=(slug:string)=>services.find(s=>s.slug===slug);
