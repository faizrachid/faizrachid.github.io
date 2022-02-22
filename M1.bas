Attribute VB_Name = "M1"
Option Explicit
Public oEH As New ClsApp
Public slide_count
Private Declare Function LoadCursorFromFile Lib "user32" Alias "LoadCursorFromFileA" (ByVal lpFileName As String) As Long
Private Declare Function LoadCursor Lib "user32" Alias "LoadCursorA" (ByVal hInstance As Long, ByVal lpCursorName As Long) As Long
Private Declare Function SetCursor Lib "user32" (ByVal hCursor As Long) As Long
Private Declare Function SetFocus Lib "user32.dll" (ByVal hWnd As Long) As Long
Private Declare Function FindWindow Lib "user32" Alias "FindWindowA" (ByVal lpClassName As String, ByVal lpWindowName As String) As Long
Private Declare Function GetWindowText Lib "user32" Alias "GetWindowTextA" (ByVal hWnd As Long, ByVal lpString As String, ByVal cch As Long) As Long
Private Declare Function GetWindowTextLength Lib "user32" Alias "GetWindowTextLengthA" (ByVal hWnd As Long) As Long
Private Declare Function GetWindow Lib "user32" (ByVal hWnd As Long, ByVal wCmd As Long) As Long

Const GW_HWNDNEXT = 2
Function addcursor(cursor)
 SetCursor LoadCursorFromFile(oEH.App.ActivePresentation.Path & "\" & cursor)
End Function

Function GetHandle(ByRef lwnd As Long, ByVal sCaption As String) As Boolean
    Dim lhWndP As Long
    Dim sStr As String
    lhWndP = FindWindow(vbNullString, vbNullString) 'PARENT WINDOW
    Do While lhWndP <> 0
        sStr = String(GetWindowTextLength(lhWndP) + 1, Chr$(0))
        GetWindowText lhWndP, sStr, Len(sStr)
        sStr = Left$(sStr, Len(sStr) - 1)
        If InStr(1, sStr, sCaption) > 0 Then
            lwnd = lhWndP
            Exit Do
        End If
        lhWndP = GetWindow(lhWndP, GW_HWNDNEXT)
    Loop

End Function
Sub record_on_slide()
Set oEH.App = Application
With oEH.App.ActivePresentation.SlideShowSettings
    
    .ShowType = ppShowTypeSpeaker

    With .Run

        .Height = 300

        .Width = 400
               
    End With
    
End With
slide_count = oEH.App.ActivePresentation.Slides.Count
If slide_count > 0 Then player1.tslide.Width = player1.lslide.Width / slide_count
End Sub
Function set_focus()
Dim lwnd As Long
GetHandle lwnd, "Diaporama WPS Presentation"
Call SetFocus(lwnd)
End Function



