from django.urls import path
from . import views

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('register/', views.UserRegister, name='userregister'),
    path('login/', views.UserLogin, name='userlogin'),
    path('logout/', views.UserLogout, name='userlogout'),
    path('changepassword/', views.UserPasswordChange, name='userchangepassword'),

    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="users/password_reset.html"), name="password_reset"),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name="users/password_reset_sent.html"), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="users/password_reset_confirm.html"), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name="users/password_reset_done.html"), name="password_reset_complete"),

]
