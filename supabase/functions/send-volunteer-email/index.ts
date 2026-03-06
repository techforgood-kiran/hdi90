import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface VolunteerForm {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  causes: string[];
  skills: string[];
  availability: string[];
  hoursPerWeek?: string;
  superpower?: string;
  whyServe?: string;
  dreamProject?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const form: VolunteerForm = await req.json();

    if (!form.name || !form.email || !form.causes?.length) {
      return new Response(
        JSON.stringify({ error: "Name, email, and at least one cause area are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const htmlBody = `
      <h2>🙏 New Volunteer Application — HDI90 Serve</h2>
      <hr/>
      <h3>About the Volunteer</h3>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;color:#555;">Name</td><td style="padding:8px;">${form.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${form.email}">${form.email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px;">${form.phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555;">City</td><td style="padding:8px;">${form.city || "Not provided"}</td></tr>
      </table>

      <h3>Cause Areas</h3>
      <p>${form.causes.join(", ")}</p>

      <h3>Skills</h3>
      <p>${form.skills?.length ? form.skills.join(", ") : "Not specified"}</p>

      <h3>Availability</h3>
      <p>${form.availability?.length ? form.availability.join(", ") : "Not specified"}</p>
      <p><strong>Hours per week:</strong> ${form.hoursPerWeek || "Flexible"}</p>

      <h3>✨ The Fun Part</h3>
      <p><strong>Superpower:</strong> ${form.superpower || "Not shared yet"}</p>
      <p><strong>Why I want to serve:</strong> ${form.whyServe || "Not shared yet"}</p>
      <p><strong>Dream project:</strong> ${form.dreamProject || "Not shared yet"}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "HDI90 Serve <onboarding@resend.dev>",
        to: ["sai@hdi90.com"],
        reply_to: form.email,
        subject: `Volunteer Application: ${form.name}`,
        html: htmlBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
