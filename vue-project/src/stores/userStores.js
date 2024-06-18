import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    password: '',
    user: '',
    loginpass: '',
  }),
  actions: {
    async register() {
      try {
        const { error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });

        if (error) throw error;

        await this.insertData();
        alert('Registration successful!');
      } catch (error) {
        console.error('Registration error:', error);
        alert('Error during registration: ' + error.message);
      }
    },
    async login() {
      try {
        const { data, error } = await supabase.auth.signIn({
          email: this.user,
          password: this.loginpass,
        });

        if (error) throw error;

        alert('Login successful!');
        console.log('User data:', data);
      } catch (error) {
        console.error('Login error:', error);
        alert('Error during login: ' + error.message);
      }
    },
    async insertData() {
      try {
        const { error } = await supabase
          .from('users')
          .insert([{ user_name: this.email, user_pass: this.password }]);

        if (error) throw error;
      } catch (error) {
        console.error('Data insertion error:', error);
      }
    },
  },
});
