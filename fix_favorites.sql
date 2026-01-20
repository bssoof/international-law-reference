-- إصلاح صلاحيات الوصول (Fix RLS Policies)
drop policy if exists "Users can check their favorites" on favorites;
drop policy if exists "Users can insert their own favorites" on favorites;
drop policy if exists "Users can view their own favorites" on favorites;
drop policy if exists "Users can delete their own favorites" on favorites;

-- إنشاء سياسة شاملة وصحيحة للقراءة والكتابة
create policy "Enable all access for users based on user_id"
on favorites for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
