<?php
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        Role::create(['name' => 'admin']);
        Permission::create(['name' => 'edit articles']);
        $role = Role::findByName('admin');
        $role->givePermissionTo('edit articles');
    }
}