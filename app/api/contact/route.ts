import { NextResponse } from 'next/server';
export async function POST(){
  // TODO: Validate payload, store consent record, and send to clinic CRM/email provider.
  return NextResponse.json({ ok:true, message:'Formulář je připravený pro napojení backendu.' });
}
